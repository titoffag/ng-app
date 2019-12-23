import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';

import { Course } from '@models/course';
import * as fromCourses from '@store/courses';
import { adapter } from './auth.reducer';

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors();

export const getCoursesState = createFeatureSelector(
  fromCourses.coursesFeatureKey
);

export const selectCourseIds = selectIds;
export const selectCourseEntities = selectEntities;
export const selectAllCourses = selectAll;
export const selectCourseTotal = selectTotal;

export const getCourseById = createSelector(
  selectCourseEntities,
  (state: Dictionary<Course>, props: { id: number }) => state[props.id]
);
