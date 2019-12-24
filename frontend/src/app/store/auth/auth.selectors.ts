import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromAuth from '@store/auth';
import { User } from '@models/user';
import { Token } from '@models/login';

export const getAuthState = createFeatureSelector(fromAuth.authFeatureKey);

export const getUserInfo = createSelector(
  getAuthState,
  (state: fromAuth.State) => state.loggedInUser
);

export const getUserName = createSelector(
  getUserInfo,
  (user: User) => `${user.name.firstName} ${user.name.lastName}`
);

export const getTokenInfo = createSelector(
  getAuthState,
  (state: fromAuth.State) => state.token
);

export const getAuthenticated = createSelector(
  getTokenInfo,
  (token: Token) => !!token
);
