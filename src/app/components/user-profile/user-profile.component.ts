import { Component } from '@angular/core';
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
