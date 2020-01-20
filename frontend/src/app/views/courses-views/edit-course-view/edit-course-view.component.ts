import { Component, NgModule, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';

import { SharedModule } from 'src/app/shared.module';
import { CustomFormsModule } from '@components/forms/forms.module';
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
  editCourseForm = this.formBuilder.group({
    name: this.formBuilder.control(null, [
      Validators.required,
      Validators.maxLength(50)
    ]),
    description: this.formBuilder.control(null, [
      Validators.required,
      Validators.maxLength(500)
    ]),
    date: this.formBuilder.control(null, Validators.required),
    length: this.formBuilder.control(null, Validators.required),
    authors: this.formBuilder.control(null, Validators.required)
  });

  constructor(
    private formBuilder: FormBuilder,
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

        const { name, description, date, length, authors } = this.editedCourse;

        this.editCourseForm.setValue({
          name,
          description,
          date: new Date(date),
          length,
          authors
        });
      });
    }
  }

  onSubmit() {
    const {
      name,
      description,
      date,
      length,
      authors
    } = this.editCourseForm.value;

    if (this.isCreating) {
      const newId = 0;
      const defaultTopRated = false;
      const newCourse = new Course(
        date,
        description,
        length,
        newId,
        name,
        defaultTopRated,
        authors
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
        isTopRated,
        authors
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
  imports: [SharedModule, CustomFormsModule],
  exports: [EditCourseViewComponent]
})
export class EditCourseViewModule {}
