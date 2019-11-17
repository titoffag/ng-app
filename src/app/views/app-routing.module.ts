import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { environment } from 'src/environments/environment';

const routes: Routes = [
  {
    path: 'courses',
    loadChildren: () =>
      import('./courses-views/courses-views.module').then(
        routingModule => routingModule.CoursesViewsModule
      )
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login-view/login-view.module').then(
        routingModule => routingModule.LoginViewRoutingModule
      )
  },
  { path: '', redirectTo: 'courses', pathMatch: 'full' }
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
