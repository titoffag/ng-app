import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginViewComponent, LoginViewModule } from './login-view.component';

const routes: Routes = [{ path: '', component: LoginViewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes), LoginViewModule],
  exports: [RouterModule]
})
export class LoginViewRoutingModule {}
