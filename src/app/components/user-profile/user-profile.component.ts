import { Component, NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  faSignOutAlt = faSignOutAlt;
  faUser = faUser;
}

@NgModule({
  declarations: [UserProfileComponent],
  imports: [FontAwesomeModule],
  exports: [UserProfileComponent]
})
export class UserProfileComponentModule {}
