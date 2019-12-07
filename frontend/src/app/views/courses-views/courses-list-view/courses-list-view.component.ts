import { Component, NgModule } from '@angular/core';
import { Observable } from 'rxjs';

import { CoursesListComponentModule } from '@components/courses-list/courses-list.component';
import { PanelComponentModule } from '@components/panel/panel.component';
import { CoursesService } from '@services/courses.service';
import { Course } from '@models/course';

@Component({
  selector: 'app-courses-list-view',
  templateUrl: './courses-list-view.component.html',
  styleUrls: ['./courses-list-view.component.scss']
})
export class CoursesListViewComponent {
  filteredCourses: Course[];

  constructor(private coursesService: CoursesService) {}

  onSearchTerm(searchTerm: string) {
    this.coursesService
      .getAll({
        searchTerm
      })
      .subscribe({
        next: filteredCourses => (this.filteredCourses = filteredCourses)
      });
  }
}

@NgModule({
  declarations: [CoursesListViewComponent],
  imports: [CoursesListComponentModule, PanelComponentModule],
  exports: [CoursesListViewComponent]
})
export class CoursesListViewModule {}
