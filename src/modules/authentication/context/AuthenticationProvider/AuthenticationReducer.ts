import { AuthenticationContextState } from 'src/modules/authentication/context/AuthenticationProvider/AuthenticationProvider';
import { RequestState } from 'src/modules/shared/service/RequestState';
import { User } from 'src/modules/users/models/User';

type AuthenticationState = AuthenticationContextState & {
  loadingState: `${RequestState}`;
  failedMessage?: string;
};

export const enum AuthenticationActionType {
  LOGIN = 'LOGIN',
  SUCCEEDED = 'SUCCEEDED',
  FAILED = 'FAILED',
}

type AuthenticationAction =
  | { type: AuthenticationActionType.LOGIN }
  | { type: AuthenticationActionType.SUCCEEDED; payload: User }
  | { type: AuthenticationActionType.FAILED; payload?: string };

export const authenticationInitialState: AuthenticationState = {
  isAuthenticated: false,
  loadingState: RequestState.IDLE,
};

export function authenticationReducer(
  state: AuthenticationState,
  action: AuthenticationAction
): AuthenticationState {
  switch (action.type) {
    case AuthenticationActionType.LOGIN:
      return { ...state, loadingState: RequestState.LOADING };

    case AuthenticationActionType.SUCCEEDED:
      return {
        ...state,
        loadingState: RequestState.SUCCEEDED,
        user: new User(action.payload),
        isAuthenticated: true,
      };

    case AuthenticationActionType.FAILED:
      return {
        ...state,
        loadingState: RequestState.FAILED,
        isAuthenticated: false,
        failedMessage: action.payload,
        user: undefined,
      };

    default:
      return state;
  }
}
