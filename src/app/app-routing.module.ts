import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursesListPageComponent } from './pages/courses-list-page/courses-list-page.component';


const routes: Routes = [
  { path: 'courses-list', component: CoursesListPageComponent },
  { path: '**', redirectTo: 'courses-list' },
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { enableTracing: true },
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
