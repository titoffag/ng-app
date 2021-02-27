import { Action, createReducer, on } from '@ngrx/store';

import { User, Token } from '@models/index';

import * as authActions from './auth.actions';

export const authFeatureKey = 'auth';

export interface State {
  loading: boolean;
  token: Token | null;
  loggedInUser: User | null;
  error: string | null;
}

const initialState: State = {
  loading: false,
  token: null,
  loggedInUser: null,
  error: null
};

export const authReducer = createReducer(
  initialState,
  on(authActions.login, state => ({ ...state, loading: true })),
  on(authActions.loginSuccess, (state, { token }) => ({
    ...state,
    token,
    loading: false
  })),
  on(authActions.loginFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  })),
  on(authActions.getUserInfo, state => ({ ...state, loading: true })),
  on(authActions.getUserInfoSuccess, (state, { userInfo }) => ({
    ...state,
    loggedInUser: userInfo,
    loading: false
  })),
  on(authActions.getUserInfoFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  })),
  on(authActions.logout, () => initialState)
);

export function reducer(state: State, action: Action) {
  return authReducer(state, action);
}
