import { Component, OnInit, Input, NgModule } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

import { Course } from '@models/course';
import { CoursesService } from '@services/courses.service';
import { CourseItemComponentModule } from '@components/course-item/course-item.component';
import { SharedModule } from 'src/app/shared.module';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  @Input() courses: Course[];

  isMaxCountCourses: boolean;

  constructor(
    private coursesService: CoursesService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit() {
    this.coursesService.getAll().subscribe(courses => (this.courses = courses));
  }

  trackByCourseId(index: number, course: Course): number | null {
    return course ? course.id : null;
  }

  loadMoreCourses() {
    const loadedCoursesCount = this.courses.length;
    this.isMaxCountCourses = this.coursesService.isMaxCountCourses;

    if (!this.isMaxCountCourses) {
      this.coursesService
        .getAll({ loadedCoursesCount })
        .subscribe(courses => (this.courses = courses));
    }
  }

  onDeletedCourse(id: number, courseName: string) {
    this.confirmationService.confirm({
      header: 'Delete course?',
      message: `Do you really want to delete "${courseName}"?`,
      acceptLabel: 'Yes, delete',
      rejectLabel: 'Cancel',
      accept: () => {
        this.coursesService.remove(id).subscribe(() => {
          this.coursesService
            .getAll()
            .subscribe(courses => (this.courses = courses));
        });
      }
    });
  }
}

@NgModule({
  declarations: [CoursesListComponent],
  imports: [SharedModule, CourseItemComponentModule],
  providers: [ConfirmationService],
  exports: [CoursesListComponent]
})
export class CoursesListComponentModule {}
