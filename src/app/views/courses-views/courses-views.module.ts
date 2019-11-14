import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  CoursesListViewComponent,
  CoursesListViewModule
} from 'src/app/views/courses-views/courses-list-view/courses-list-view.component';

const routes: Routes = [{ path: '', component: CoursesListViewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes), CoursesListViewModule],
  exports: [RouterModule]
})
export class CoursesViewsModule {}
