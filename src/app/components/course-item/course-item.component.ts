import {
  Component,
  Input,
  OnInit,
  EventEmitter,
  Output,
  SimpleChanges,
  OnChanges,
  OnDestroy,
  ChangeDetectionStrategy,
  NgModule
} from '@angular/core';
import {
  faPencilAlt,
  faTrashAlt,
  faCalendarAlt,
  faClock,
  faStar
} from '@fortawesome/free-solid-svg-icons';

import { ICourse } from 'src/app/models';
import { SharedModule } from 'src/app/shared.module';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemComponent implements OnInit, OnChanges, OnDestroy {
  @Input() course: ICourse;
  @Output() deletedCourse = new EventEmitter<string>();

  faPencilAlt = faPencilAlt;
  faTrashAlt = faTrashAlt;
  faCalendarAlt = faCalendarAlt;
  faClock = faClock;
  faStar = faStar;

  ngOnInit() {
    console.log(`[Course Item #${this.course.id}] ngOnInit hook call`);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(
      `[Course Item #${this.course.id}] ngOnChanges with changes:`,
      changes
    );
  }

  ngOnDestroy() {
    console.log(`[Course Item #${this.course.id}] ngOnDestroy hook call`);
  }

  editCourse() {
    console.log('course edited with id:', this.course.id);
  }

  deleteCourse() {
    this.deletedCourse.emit(this.course.id);
  }
}

@NgModule({
  declarations: [CourseItemComponent],
  imports: [SharedModule],
  exports: [CourseItemComponent]
})
export class CourseItemComponentModule {}
