import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { Course } from '@models/course';

import * as coursesActions from './course.actions';

export const coursesFeatureKey = 'courses';

export interface State extends EntityState<Course> {
  loading: boolean;
  error: string | null;
}

export const adapter: EntityAdapter<Course> = createEntityAdapter<Course>();

const initialState: State = adapter.getInitialState({
  loading: false,
  error: null
});

export const coursesReducer = createReducer(
  initialState,
  on(coursesActions.loadCourses, state => ({ ...state, loading: true })),
  on(coursesActions.loadCoursesSuccess, (state, { courses }) => {
    return adapter.addAll(courses, { ...state, loading: false });
  }),
  on(coursesActions.loadCoursesFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  })),

  on(coursesActions.getCourse, state => ({ ...state, loading: true })),
  on(coursesActions.getCourseSuccess, (state, { course }) => {
    // return adapter.updateOne(course, { ...state, loading: false });
    return state;
  }),
  on(coursesActions.getCourseFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  })),

  on(coursesActions.addCourse, state => ({ ...state, loading: true })),
  on(coursesActions.addCourseSuccess, (state, { course }) => {
    return adapter.addOne(course, { ...state, loading: false });
  }),
  on(coursesActions.addCourseFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  })),

  on(coursesActions.updateCourse, state => ({ ...state, loading: true })),
  on(coursesActions.updateCourseSuccess, (state, { course }) => {
    // return adapter.updateOne(course, { ...state, loading: false });
    return state;
  }),
  on(coursesActions.updateCourseFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  })),

  on(coursesActions.deleteCourse, state => ({ ...state, loading: true })),
  on(coursesActions.deleteCourseSuccess, (state, { id }) => {
    return adapter.removeOne(id, { ...state, loading: false });
  }),
  on(coursesActions.deleteCourseFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  }))
);

export function reducer(state: State, action: Action) {
  return coursesReducer(state, action);
}
