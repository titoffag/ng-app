import { Component, NgModule } from '@angular/core';
import { faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { select, Store } from '@ngrx/store';

import { AppState } from '@store/reducers';
import * as fromAuth from '@store/auth';
import { getUserName } from '@store/auth/auth.selectors';
import { SharedModule } from 'src/app/shared.module';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  faSignOutAlt = faSignOutAlt;
  faUser = faUser;
  userLogin$ = this.store.pipe(select(getUserName));

  constructor(private store: Store<AppState>) {}

  logoff() {
    this.store.dispatch(fromAuth.logout());
  }
}

@NgModule({
  declarations: [UserProfileComponent],
  imports: [SharedModule],
  exports: [UserProfileComponent]
})
export class UserProfileComponentModule {}
