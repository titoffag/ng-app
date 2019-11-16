import { Component, NgModule, OnInit } from '@angular/core';

import { SharedModule } from 'src/app/shared.module';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit {
  emailInput: string;
  passwordInput: string;

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  login() {
    this.authService.login(this.emailInput, this.passwordInput);
  }
}

@NgModule({
  declarations: [LoginViewComponent],
  imports: [SharedModule],
  exports: [LoginViewComponent]
})
export class LoginViewModule {}
