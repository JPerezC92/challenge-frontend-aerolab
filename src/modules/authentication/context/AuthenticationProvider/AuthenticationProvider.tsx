import React, { useReducer } from 'react';
import { PointsAddEventListener } from 'src/modules/points/events/PointsAdd.event';
import { ProductRedeemEventListener } from 'src/modules/products/events/ProductRedeem.event';
import { useAbortableEffect } from 'src/modules/shared/hooks/useAbortableEffect';
import { User } from 'src/modules/users/models/User';
import { useChallengeUsersRepository } from 'src/modules/users/service/useChallengeUsersRepository';
import {
  AuthenticationActionType,
  authenticationInitialState,
  authenticationReducer,
} from './AuthenticationReducer';

export type AuthenticationContextState =
  | {
      isAuthenticated: true;
      user: User;
    }
  | {
      isAuthenticated: false;
      user?: User;
    };

const AuthenticationContext = React.createContext<AuthenticationContextState>(
  {} as AuthenticationContextState
);

export const useAuthenticationContext = () => {
  const context = React.useContext(AuthenticationContext);

  if (!context) {
    throw new Error(
      'Authentication context must be used inside AuthenticationProvider'
    );
  }

  return context;
};

type AuthenticationProviderProps = {
  children?: React.ReactNode;
};

export const AuthenticationProvider: React.FC<AuthenticationProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(
    authenticationReducer,
    authenticationInitialState
  );
  const usersRepository = useChallengeUsersRepository();

  useAbortableEffect(
    (abortController) => {
      const handleAuthentication = async () => {
        dispatch({ type: AuthenticationActionType.LOGIN });

        const _usersRepository = usersRepository(abortController.signal);
        const user = await _usersRepository.find();

        if (!user) {
          return dispatch({
            type: AuthenticationActionType.FAILED,
            payload: 'There was an error while attempting to authenticate',
          });
        }

        dispatch({
          type: AuthenticationActionType.SUCCEEDED,
          payload: user,
        });
      };

      handleAuthentication();

      // listening for Events
      const cleanProductRedeemEventListener =
        ProductRedeemEventListener(handleAuthentication);
      const cleanPointsAddEventListener =
        PointsAddEventListener(handleAuthentication);

      return () => {
        cleanProductRedeemEventListener();
        cleanPointsAddEventListener();
      };
    },
    [usersRepository]
  );

  React.useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <AuthenticationContext.Provider value={{ ...state }}>
      {children}
    </AuthenticationContext.Provider>
  );
};
