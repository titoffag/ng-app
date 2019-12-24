import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  CoursesListViewComponent,
  CoursesListViewModule
} from './courses-list-view/courses-list-view.component';
import {
  EditCourseViewComponent,
  EditCourseViewModule
} from './edit-course-view/edit-course-view.component';

const routes: Routes = [
  {
    path: '',
    component: CoursesListViewComponent,
    data: { isModuleRootComponent: true }
  },
  {
    path: 'new',
    component: EditCourseViewComponent,
    data: { label: 'New Course' }
  },
  {
    path: ':id',
    component: EditCourseViewComponent,
    data: { label: 'Edit Course' }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CoursesListViewModule,
    EditCourseViewModule
  ],
  exports: [RouterModule]
})
export class CoursesViewsModule {}
