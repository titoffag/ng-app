import {
  Component,
  Input,
  OnInit,
  EventEmitter,
  Output,
  SimpleChanges,
  OnChanges,
  OnDestroy,
  ChangeDetectionStrategy
} from '@angular/core';
import {
  faPencilAlt,
  faTrashAlt,
  faCalendarAlt,
  faClock,
  faStar
} from '@fortawesome/free-solid-svg-icons';

import { ICourse } from 'src/app/models';
import { setBorder } from 'src/app/utils';

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

  setBorder(date: string) {
    return setBorder(date);
  }

  editCourse() {
    console.log('course edited with id:', this.course.id);
  }

  deleteCourse() {
    this.deletedCourse.emit(this.course.id);
  }
}
