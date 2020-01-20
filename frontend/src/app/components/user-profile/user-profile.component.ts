import { Component, NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { TranslateModule } from '@ngx-translate/core';

import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  faSignOutAlt = faSignOutAlt;
  faUser = faUser;

  constructor(private authService: AuthService) {}

  get userLogin(): string {
    if (!this.authService.userInfo) {
      return '';
    }

    return this.authService.userInfo;
  }

  logoff() {
    this.authService.logout();
  }
}

@NgModule({
  declarations: [UserProfileComponent],
  imports: [FontAwesomeModule, TranslateModule],
  exports: [UserProfileComponent]
})
export class UserProfileComponentModule {}
