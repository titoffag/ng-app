import { Component, NgModule } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { SharedModule } from 'src/app/shared.module';
import { AuthService } from '@services/auth.service';

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

  constructor(private authService: AuthService) {}

  onSubmit() {
    const { email, password } = this.loginForm.value;
    this.authService.login(email, password);
  }
}

@NgModule({
  declarations: [LoginViewComponent],
  imports: [SharedModule],
  exports: [LoginViewComponent]
})
export class LoginViewModule {}
