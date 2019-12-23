import { Component, OnInit, Input, NgModule } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { Store, select } from '@ngrx/store';

import { Course } from '@models/course';
import { CourseItemComponentModule } from '@components/course-item/course-item.component';
import { SharedModule } from 'src/app/shared.module';
import { AppState } from '@store/reducers';
import * as fromCourses from '@store/courses';
import {
  getCoursesState,
  selectAllCourses
} from '@store/courses/course.selectors';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  @Input() courses: Course[];
  courses$: any;

  isMaxCountCourses: boolean;

  constructor(
    private confirmationService: ConfirmationService,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.store.dispatch(fromCourses.loadCourses());
    this.courses$ = this.store.pipe(
      select(getCoursesState),
      select(selectAllCourses)
    );
  }

  trackByCourseId(index: number, course: Course): number | null {
    return course ? course.id : null;
  }

  loadMoreCourses() {
    // const loadedCoursesCount = this.courses.length;
    // this.isMaxCountCourses = this.coursesService.isMaxCountCourses;
    // if (!this.isMaxCountCourses) {
    //   this.coursesService
    //     .getAll({ loadedCoursesCount })
    //     .subscribe(courses => (this.courses = courses));
    // }
  }

  onDeletedCourse(id: number, courseName: string) {
    this.confirmationService.confirm({
      header: 'Delete course?',
      message: `Do you really want to delete "${courseName}"?`,
      acceptLabel: 'Yes, delete',
      rejectLabel: 'Cancel',
      accept: () => {
        this.store.dispatch(fromCourses.deleteCourse({ id }));
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
