import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';

import { Course } from '@models/course';
import * as fromCourses from '@store/courses';
import { adapter } from './courses.reducer';

const { selectEntities, selectAll } = adapter.getSelectors();

export const getCoursesState = createFeatureSelector(
  fromCourses.coursesFeatureKey
);

export const selectCourseEntities = createSelector(
  getCoursesState,
  (state: fromCourses.State) => selectEntities(state)
);

export const selectAllCourses = createSelector(
  getCoursesState,
  (state: fromCourses.State) => selectAll(state)
);

export const getCourseById = createSelector(
  selectCourseEntities,
  (state: Dictionary<Course>, props: { id: number }) => state[props.id]
);
