import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

import { CoursesService } from '@services/courses.service';
import * as fromCourses from '@store/courses';
import { appRoutesNames } from '@views/app.routes.names';

@Injectable()
export class CourseEffects {
  loadCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromCourses.loadCourses),
      mergeMap(() =>
        this.coursesService.getAll().pipe(
          map(courses => fromCourses.loadCoursesSuccess({ courses })),
          catchError(error =>
            of(fromCourses.loadCoursesFailure({ error: error.statusText }))
          )
        )
      )
    )
  );

  searchCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromCourses.searchCourses),
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

  addCourseSuccess$ = this.actions$.pipe(
    ofType(fromCourses.addCourseSuccess),
    tap(() => this.router.navigate([appRoutesNames.COURSES]))
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

  updateCourseSuccess$ = this.actions$.pipe(
    ofType(fromCourses.updateCourseSuccess),
    tap(() => this.router.navigate([appRoutesNames.COURSES]))
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
    private coursesService: CoursesService,
    private router: Router
  ) {}
}
