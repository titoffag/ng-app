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
  @Input() searchTerm: string;

  courses: Course[];

  constructor(
    private coursesService: CoursesService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit() {
    this.courses = this.coursesService.getAll();
  }

  trackByCourseId(index: number, course: Course): string | null {
    return course ? course.id : null;
  }

  loadMoreCourses(event: MouseEvent) {
    console.log('load more courses');
    event.preventDefault();
  }

  onDeletedCourse(id: string) {
    const course = this.coursesService.getBy(id);

    this.confirmationService.confirm({
      header: 'Delete course?',
      message: `Do you really want to delete "${course.title}"?`,
      acceptLabel: 'Yes, delete',
      rejectLabel: 'Cancel',
      accept: () => {
        this.courses = this.coursesService.remove(id);
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
