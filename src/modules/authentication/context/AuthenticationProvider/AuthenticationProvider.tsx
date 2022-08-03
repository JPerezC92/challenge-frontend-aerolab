import { useQuery } from '@tanstack/react-query';
import React, { useReducer } from 'react';
import { toast } from 'react-toastify';
import { AuthenticationFailureToast } from 'src/modules/authentication/components/AuthenticationFailureToast';
import { PointsAddEventListener } from 'src/modules/points/events/PointsAdd.event';
import { ProductRedeemEventListener } from 'src/modules/products/events/ProductRedeem.event';
import { User } from 'src/modules/users/models/User';
import { ChallengeUsersRepository } from 'src/modules/users/service/ChallengeUsersRepository';
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

  const {
    refetch: refetchLogin,
    data: user,
    isSuccess,
    isError,
  } = useQuery(
    ['login'],
    async ({ signal }) => {
      dispatch({ type: AuthenticationActionType.LOGIN });
      const usersRepository = ChallengeUsersRepository(signal);
      const user = await usersRepository.find();
      return user;
    },
    { onError: () => toast(<AuthenticationFailureToast />), retry: false }
  );

  React.useEffect(() => {
    if (isError) {
      return dispatch({
        type: AuthenticationActionType.FAILED,
        payload: 'There was an error while attempting to authenticate',
      });
    }

    if (isSuccess && user) {
      dispatch({
        type: AuthenticationActionType.SUCCEEDED,
        payload: user,
      });
    }

    const _refetchLogin = () => refetchLogin();

    const cleanProductRedeemEventListener =
      ProductRedeemEventListener(_refetchLogin);
    const cleanPointsAddEventListener = PointsAddEventListener(_refetchLogin);

    return () => {
      cleanProductRedeemEventListener();
      cleanPointsAddEventListener();
    };
  }, [isError, isSuccess, refetchLogin, user]);

  return (
    <AuthenticationContext.Provider value={{ ...state }}>
      {children}
    </AuthenticationContext.Provider>
  );
};
