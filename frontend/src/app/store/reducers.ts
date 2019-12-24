import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';

import { environment } from 'src/environments/environment';
import * as fromCourses from './courses';
import * as fromAuth from './auth';

export interface AppState {
  router: RouterReducerState;
  courses: fromCourses.State;
  auth: fromAuth.State;
}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
  courses: fromCourses.reducer,
  auth: fromAuth.reducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [storeFreeze]
  : [];
