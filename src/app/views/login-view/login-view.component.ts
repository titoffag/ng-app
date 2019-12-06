import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { SharedModule } from 'src/app/shared.module';
import { AuthService } from '@services/auth.service';
import { appRoutesNames } from '@views/app.routes.names';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss']
})
export class LoginViewComponent {
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  loginLink = appRoutesNames.LOGIN;

  constructor(private authService: AuthService) {}

  onSubmit() {
    const { email, password } = this.loginForm.value;
    this.authService.login(email, password);
  }
}

@NgModule({
  declarations: [LoginViewComponent],
  imports: [SharedModule, RouterModule],
  exports: [LoginViewComponent]
})
export class LoginViewModule {}
