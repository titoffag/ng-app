import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

import { CoursesService } from '@services/courses.service';
import * as fromCourses from '@store/courses';

@Injectable()
export class CourseEffects {
  loadCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromCourses.loadCourses),
      map(action => action.search),
      mergeMap(search =>
        this.coursesService.getAll({ search }).pipe(
          map(courses => fromCourses.loadCoursesSuccess({ courses })),
          catchError(error =>
            of(fromCourses.loadCoursesFailure({ error: error.statusText }))
          )
        )
      )
    )
  );

  getCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromCourses.getCourse),
      map(action => action.id),
      mergeMap(id =>
        this.coursesService.getBy(id).pipe(
          map(course => fromCourses.getCourseSuccess({ course })),
          catchError(error =>
            of(fromCourses.getCourseFailure({ error: error.statusText }))
          )
        )
      )
    )
  );

  addCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromCourses.addCourse),
      map(action => action.course),
      mergeMap(course =>
        this.coursesService.create(course).pipe(
          map(() => fromCourses.addCourseSuccess({ course })),
          catchError(error =>
            of(fromCourses.addCourseFailure({ error: error.statusText }))
          )
        )
      )
    )
  );

  updateCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromCourses.updateCourse),
      map(action => action.course),
      mergeMap(course =>
        this.coursesService.update(course).pipe(
          map(() => fromCourses.updateCourseSuccess({ course })),
          catchError(error =>
            of(fromCourses.updateCourseFailure({ error: error.statusText }))
          )
        )
      )
    )
  );

  deleteCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromCourses.deleteCourse),
      map(action => action.id),
      mergeMap(id =>
        this.coursesService.remove(id).pipe(
          map(() => fromCourses.deleteCourseSuccess({ id })),
          catchError(error =>
            of(fromCourses.deleteCourseFailure({ error: error.statusText }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private coursesService: CoursesService
  ) {}
}
