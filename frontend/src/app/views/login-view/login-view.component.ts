import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { SharedModule } from 'src/app/shared.module';
import { appRoutesNames } from '@views/app.routes.names';
import { AppState } from '@store/reducers';
import * as fromAuth from '@store/auth';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss']
})
export class LoginViewComponent {
  loginForm = new FormGroup({
    login: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  loginLink = appRoutesNames.LOGIN;

  constructor(private store: Store<AppState>) {}

  onSubmit() {
    this.store.dispatch(fromAuth.login({ loginInfo: this.loginForm.value }));
  }
}

@NgModule({
  declarations: [LoginViewComponent],
  imports: [SharedModule, RouterModule],
  exports: [LoginViewComponent]
})
export class LoginViewModule {}
