import { Component, NgModule } from '@angular/core';

import { CoursesListComponentModule } from '@components/courses-list/courses-list.component';
import { PanelComponentModule } from '@components/panel/panel.component';

@Component({
  selector: 'app-courses-list-view',
  templateUrl: './courses-list-view.component.html',
  styleUrls: ['./courses-list-view.component.scss']
})
export class CoursesListViewComponent {}

@NgModule({
  declarations: [CoursesListViewComponent],
  imports: [CoursesListComponentModule, PanelComponentModule],
  exports: [CoursesListViewComponent]
})
export class CoursesListViewModule {}
