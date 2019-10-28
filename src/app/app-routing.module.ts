import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { environment } from 'src/environments/environment';

import { CoursesListPageComponent } from './pages/courses-list-page/courses-list-page.component';

const routes: Routes = [
  { path: 'courses-list', component: CoursesListPageComponent },
  { path: '', redirectTo: 'courses-list', pathMatch: 'full' },
];

const isDevelopmentVersion = !environment.production;

const routerConfig = {
  enableTracing: isDevelopmentVersion,
};

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    routerConfig,
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
