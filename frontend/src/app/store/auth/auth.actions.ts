import { createAction, props } from '@ngrx/store';

import { Login, User, Token } from '@models/index';

export const login = createAction(
  '[Login Page] Login',
  props<{ loginInfo: Login }>()
);

export const loginSuccess = createAction(
  '[Login Page] Login Success',
  props<{ token: Token }>()
);

export const loginFailure = createAction(
  '[Login Page] Login Failure',
  props<{ error: string }>()
);

export const getUserInfo = createAction(
  '[Login Page] Get User Info',
  props<{ token: Token }>()
);

export const getUserInfoSuccess = createAction(
  '[Login Page] Get User Info Success',
  props<{ userInfo: User }>()
);

export const getUserInfoFailure = createAction(
  '[Login Page] Get User Info Failure',
  props<{ error: string }>()
);

export const logout = createAction('[Login Page] Logout');
