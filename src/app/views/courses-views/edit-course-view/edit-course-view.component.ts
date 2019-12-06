import { Component, NgModule, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as uuid from 'uuid';

import { SharedModule } from 'src/app/shared.module';
import { CoursesService } from '@services/courses.service';
import { Course } from '@models/course';
import { appRoutesNames } from '@views/app.routes.names';

@Component({
  selector: 'app-edit-course-view',
  templateUrl: './edit-course-view.component.html',
  styleUrls: ['./edit-course-view.component.scss']
})
export class EditCourseViewComponent implements OnInit {
  isCreating = false;
  private editedCourse: Course;
  editCourseForm = new FormGroup({
    title: new FormControl(null, [
      Validators.required,
      Validators.maxLength(50)
    ]),
    description: new FormControl(null, [
      Validators.required,
      Validators.maxLength(500)
    ]),
    creationDate: new FormControl(null, Validators.required),
    duration: new FormControl(null, Validators.required)
  });

  constructor(
    private router: Router,
    private coursesService: CoursesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.isCreating = !this.route.snapshot.paramMap.has('id');

    if (!this.isCreating) {
      const courseId: string | null = this.route.snapshot.paramMap.get('id');

      if (!courseId) {
        throw new Error('Cannot get id from url params');
      }

      this.editedCourse = this.coursesService.getBy(courseId);
      const { title, description, creationDate, duration } = this.editedCourse;

      this.editCourseForm.setValue({
        title,
        description,
        creationDate,
        duration
      });
    }
  }

  onSubmit() {
    const {
      title,
      description,
      creationDate,
      duration
    } = this.editCourseForm.value;

    if (this.isCreating) {
      const guid = uuid.v4();
      const defaultTopRated = false;
      const newCourse = new Course(
        creationDate,
        description,
        duration,
        guid,
        title,
        defaultTopRated
      );

      this.coursesService.create(newCourse);
    } else {
      const { id, topRated } = this.editedCourse;
      const newCourse = new Course(
        creationDate,
        description,
        duration,
        id,
        title,
        topRated
      );

      this.coursesService.update(newCourse);
    }

    this.router.navigate([appRoutesNames.COURSES]);
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
