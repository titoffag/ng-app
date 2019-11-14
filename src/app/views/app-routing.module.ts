import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { environment } from 'src/environments/environment';

const routes: Routes = [
  {
    path: 'courses-list',
    loadChildren:
      'src/app/views/courses-views/courses-views.module#CoursesViewsModule'
  },
  {
    path: 'login',
    loadChildren:
      'src/app/views/login-view/login-view.module#LoginViewRoutingModule'
  },
  { path: '', redirectTo: 'courses-list', pathMatch: 'full' }
];

const isDevelopmentVersion = !environment.production;

const routerConfig = {
  enableTracing: isDevelopmentVersion
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerConfig)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
