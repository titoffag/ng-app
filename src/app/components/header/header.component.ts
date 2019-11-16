import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogoComponentModule } from 'src/app/components/logo/logo.component';
import { UserProfileComponentModule } from 'src/app/components/user-profile/user-profile.component';
import { BreadcrumbsComponentModule } from 'src/app/components/breadcrumbs/breadcrumbs.component';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  crumbs = [{ label: 'Courses', url: '/courses-list' }];

  constructor(private authService: AuthService) {}

  get isLoggedIn() {
    return this.authService.isAuthenticated;
  }
}

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    LogoComponentModule,
    UserProfileComponentModule,
    BreadcrumbsComponentModule
  ],
  exports: [HeaderComponent]
})
export class HeaderComponentModule {}
