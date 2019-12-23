import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';

import { environment } from 'src/environments/environment';
import * as fromCourses from './courses';

export interface AppState {
  router: RouterReducerState;
  courses: fromCourses.State;
}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
  courses: fromCourses.reducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [storeFreeze]
  : [];
