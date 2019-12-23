import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Course } from '@models/course';

// Get all courses
export const loadCourses = createAction(
  '[Courses Page] Load Courses',
  props<{ search?: string }>()
);

export const loadCoursesSuccess = createAction(
  '[Courses Page] Load Courses Success',
  props<{ courses: Course[] }>()
);

export const loadCoursesFailure = createAction(
  '[Courses Page] Load Courses Failure',
  props<{ error: string }>()
);

// Get course by id
export const getCourse = createAction(
  '[Courses Page] Get Course',
  props<{ id: number }>()
);

export const getCourseSuccess = createAction(
  '[Courses Page] Get Course Success',
  props<{ course: Course }>()
);

export const getCourseFailure = createAction(
  '[Courses Page] Get Course Failure',
  props<{ error: string }>()
);

// Add new course
export const addCourse = createAction(
  '[Courses Page] Add Course',
  props<{ course: Course }>()
);

export const addCourseSuccess = createAction(
  '[Courses Page] Add Course Success',
  props<{ course: Course }>()
);

export const addCourseFailure = createAction(
  '[Courses Page] Add Course Failure',
  props<{ error: string }>()
);

// Update exist course
export const updateCourse = createAction(
  '[Courses Page] Update Course',
  props<{ course: Course }>()
);

export const updateCourseSuccess = createAction(
  '[Courses Page] Update Course Success',
  props<{ course: Course }>()
);

export const updateCourseFailure = createAction(
  '[Courses Page] Update Course Failure',
  props<{ error: string }>()
);

// Delete course
export const deleteCourse = createAction(
  '[Courses Page] Delete Course',
  props<{ id: number }>()
);

export const deleteCourseSuccess = createAction(
  '[Courses Page] Delete Course Success',
  props<{ id: number }>()
);

export const deleteCourseFailure = createAction(
  '[Courses Page] Delete Course Failure',
  props<{ error: string }>()
);
