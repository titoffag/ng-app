import {
  Component,
  Input,
  EventEmitter,
  Output,
  ChangeDetectionStrategy,
  NgModule,
  OnInit,
  ChangeDetectorRef
} from '@angular/core';
import { Router } from '@angular/router';
import {
  faPencilAlt,
  faTrashAlt,
  faCalendarAlt,
  faClock,
  faStar
} from '@fortawesome/free-solid-svg-icons';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

import { ICourse } from '@models/course';
import { appRoutesNames } from '@views/app.routes.names';
import { SharedModule } from 'src/app/shared.module';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemComponent implements OnInit {
  @Input() course: ICourse;
  @Output() deletedCourse = new EventEmitter<number>();

  faPencilAlt = faPencilAlt;
  faTrashAlt = faTrashAlt;
  faCalendarAlt = faCalendarAlt;
  faClock = faClock;
  faStar = faStar;
  locale: string;

  constructor(
    private router: Router,
    private translateService: TranslateService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.locale = this.translateService.currentLang;
    this.translateService.onLangChange.subscribe(
      (langChangeEvent: LangChangeEvent) => {
        this.locale = langChangeEvent.lang;
        this.cdRef.markForCheck();
      }
    );
  }

  editCourse() {
    this.router.navigate([appRoutesNames.EDIT_COURSE(this.course.id)]);
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
