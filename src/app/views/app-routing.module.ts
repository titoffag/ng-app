import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { environment } from 'src/environments/environment';
import { AuthGuard } from '@guards/auth.guard';

import {
  NotFoundViewComponent,
  NotFoundViewModule
} from './not-found-view/not-found-view.component';
import { appRoutesNames } from './app.routes.names';

const routes: Routes = [
  { path: '', redirectTo: appRoutesNames.COURSES, pathMatch: 'full' },
  {
    path: appRoutesNames.COURSES,
    loadChildren: () =>
      import('./courses-views/courses-views.module').then(
        routingModule => routingModule.CoursesViewsModule
      ),
    canActivate: [AuthGuard],
    data: { label: 'Courses' }
  },
  {
    path: appRoutesNames.LOGIN,
    loadChildren: () =>
      import('./login-view/login-view.module').then(
        routingModule => routingModule.LoginViewRoutingModule
      ),
    canActivate: [AuthGuard],
    data: { label: 'Login' }
  },
  { path: '**', component: NotFoundViewComponent }
];

const isDevelopmentVersion = !environment.production;

const routerConfig = {
  // enableTracing: isDevelopmentVersion
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerConfig), NotFoundViewModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
