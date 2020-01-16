import { Component, NgModule, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';

import { SharedModule } from 'src/app/shared.module';
import { CoursesService } from '@services/courses.service';
import { Course } from '@models/course';
import { appRoutesNames } from '@views/app.routes.names';
import { TextInputModule } from '@components/forms/text-input/text-input.component';

@Component({
  selector: 'app-edit-course-view',
  templateUrl: './edit-course-view.component.html',
  styleUrls: ['./edit-course-view.component.scss']
})
export class EditCourseViewComponent implements OnInit {
  isCreating = false;
  private editedCourse: Course;
  editCourseForm = this.form.group({
    name: this.form.control(null, [
      Validators.required,
      Validators.maxLength(50)
    ]),
    description: this.form.control(null, [
      Validators.required,
      Validators.maxLength(500)
    ]),
    date: this.form.control(null, Validators.required),
    length: this.form.control(null, Validators.required)
  });
  test = this.form.control('test');

  constructor(
    private form: FormBuilder,
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

      this.coursesService.getBy(+courseId).subscribe((course: Course) => {
        this.editedCourse = course;

        const { name, description, date, length } = this.editedCourse;

        this.editCourseForm.setValue({
          name,
          description,
          date: new Date(date),
          length
        });
      });
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

      this.coursesService
        .create(newCourse)
        .subscribe(() => this.router.navigate([appRoutesNames.COURSES]));
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

      this.coursesService
        .update(newCourse)
        .subscribe(() => this.router.navigate([appRoutesNames.COURSES]));
    }
  }

  onCancel() {
    this.router.navigate([appRoutesNames.COURSES]);
  }
}

@NgModule({
  declarations: [EditCourseViewComponent],
  imports: [SharedModule, TextInputModule],
  exports: [EditCourseViewComponent]
})
export class EditCourseViewModule {}
