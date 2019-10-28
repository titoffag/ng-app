import {
  Component,
  Input,
  OnInit,
  EventEmitter,
  Output,
  SimpleChanges,
  OnChanges,
  OnDestroy,
  ChangeDetectionStrategy } from '@angular/core';
import { faPencilAlt, faTrashAlt, faCalendarAlt, faClock } from '@fortawesome/free-solid-svg-icons';

import { ICourse } from 'src/app/models/course';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseItemComponent implements OnInit, OnChanges, OnDestroy {
  @Input() course: ICourse;
  @Output() deletedCourse = new EventEmitter<string>();

  faPencilAlt = faPencilAlt;
  faTrashAlt = faTrashAlt;
  faCalendarAlt = faCalendarAlt;
  faClock = faClock;

  ngOnInit() {
    console.log(`[Course Item #${this.course.id}] ngOnInit hook call`);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(`[Course Item #${this.course.id}] ngOnChanges with changes:`, changes);
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
