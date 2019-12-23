import { Component, NgModule, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';

import { SharedModule } from 'src/app/shared.module';
import { Course } from '@models/course';
import { appRoutesNames } from '@views/app.routes.names';
import { AppState } from '@store/reducers';
import * as fromCourses from '@store/courses';
import {
  getCoursesState,
  getCourseById
} from '@store/courses/course.selectors';

@Component({
  selector: 'app-edit-course-view',
  templateUrl: './edit-course-view.component.html',
  styleUrls: ['./edit-course-view.component.scss']
})
export class EditCourseViewComponent implements OnInit {
  isCreating = false;
  private editedCourse: Course;
  editCourseForm = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.maxLength(50)
    ]),
    description: new FormControl(null, [
      Validators.required,
      Validators.maxLength(500)
    ]),
    date: new FormControl(null, Validators.required),
    length: new FormControl(null, Validators.required)
  });
  editedCourseSub: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.isCreating = !this.route.snapshot.paramMap.has('id');

    if (!this.isCreating) {
      const courseId: string | null = this.route.snapshot.paramMap.get('id');

      if (!courseId) {
        throw new Error('Cannot get id from url params');
      }

      this.store.dispatch(fromCourses.getCourse({ id: +courseId }));
      this.editedCourseSub = this.store
        .pipe(
          select(getCoursesState),
          select(getCourseById, { id: +courseId })
        )
        .subscribe(course => {
          if (!course) {
            throw new Error('Cannot get course by id');
          }

          this.editedCourse = course;
        });
      // this.coursesService.getBy(+courseId).subscribe((course: Course) => {
      //   this.editedCourse = course;

      //   const { name, description, date, length } = this.editedCourse;

      //   this.editCourseForm.setValue({
      //     name,
      //     description,
      //     date: new Date(date),
      //     length
      //   });
      // });
    }
  }

  onSubmit() {
    const { name, description, date, length } = this.editCourseForm.value;

    if (this.isCreating) {
      const newId = 0;
      const defaultTopRated = false;
      const newCourse = new Course(
        date,
        description,
        length,
        newId,
        name,
        defaultTopRated
      );

      // this.coursesService
      //   .create(newCourse)
      //   .subscribe(() => this.router.navigate([appRoutesNames.COURSES]));
    } else {
      const { id, isTopRated } = this.editedCourse;
      const newCourse = new Course(
        date,
        description,
        length,
        id,
        name,
        isTopRated
      );

      // this.coursesService
      //   .update(newCourse)
      //   .subscribe(() => this.router.navigate([appRoutesNames.COURSES]));
    }
  }

  onCancel() {
    this.router.navigate([appRoutesNames.COURSES]);
  }
}

@NgModule({
  declarations: [EditCourseViewComponent],
  imports: [SharedModule],
  exports: [EditCourseViewComponent]
})
export class EditCourseViewModule {}
