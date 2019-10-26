import { Component, Input, OnInit, EventEmitter, Output, SimpleChanges, OnChanges, OnDestroy } from '@angular/core';
import { faPencilAlt, faTrashAlt, faCalendarAlt, faClock } from '@fortawesome/free-solid-svg-icons';

import { ICourse } from 'src/app/models/course';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnInit, OnChanges, OnDestroy {
  @Input() course: ICourse;
  @Output() deletedCourse = new EventEmitter<number>();

  public faPencilAlt = faPencilAlt;
  public faTrashAlt = faTrashAlt;
  public faCalendarAlt = faCalendarAlt;
  public faClock = faClock;

  ngOnInit() {
    console.log(`[Course Item #${this.course.id}] ngOnInit hook call`);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`[Course Item #${this.course.id}] ngOnChanges with changes:`, changes);
  }

  ngOnDestroy(): void {
    console.log(`[Course Item #${this.course.id}] ngOnDestroy hook call`);
  }

  editCourse(): void {
    console.log('course edited with id:', +this.course.id);
  }

  deleteCourse(): void {
    this.deletedCourse.emit(+this.course.id);
  }

}
