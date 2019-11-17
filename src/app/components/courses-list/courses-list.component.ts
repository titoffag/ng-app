import {
  Component,
  OnInit,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  Input,
  DoCheck,
  NgModule
} from '@angular/core';
import { ConfirmationService } from 'primeng/api';

import { Course } from 'src/app/models';
import { CoursesService } from 'src/app/services/courses.service';
import { CourseItemComponentModule } from 'src/app/components/course-item/course-item.component';
import { SharedModule } from 'src/app/shared.module';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent
  implements
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked {
  @Input() searchTerm: string;

  courses: Course[];

  constructor(
    private coursesService: CoursesService,
    private confirmationService: ConfirmationService
  ) {
    console.log('[Course List] constructor call');
  }

  ngOnInit() {
    console.log('[Course List] ngOnInit hook call');

    this.courses = this.coursesService.getAll();
  }

  ngDoCheck() {
    console.log('[Courses List] ngDoCheck hook call');
  }

  ngAfterContentInit() {
    console.log('[Courses List] ngAfterContentInit hook call');
  }

  ngAfterContentChecked() {
    console.log('[Courses List] ngAfterContentChecked hook call');
  }

  ngAfterViewInit() {
    console.log('[Courses List] ngAfterViewInit hook call');
  }

  ngAfterViewChecked() {
    console.log('[Courses List] ngAfterViewChecked hook call');
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
        console.log('course deleted with id:', id);
        this.courses = this.coursesService.delete(id);
      }
    });
  }
}

@NgModule({
  declarations: [CoursesListComponent],
  imports: [SharedModule, CourseItemComponentModule],
  providers: [CoursesService, ConfirmationService],
  exports: [CoursesListComponent]
})
export class CoursesListComponentModule {}
