import { Component, NgModule } from '@angular/core';

import { LogoComponentModule } from 'src/app/components/logo/logo.component';
import { UserProfileComponentModule } from 'src/app/components/user-profile/user-profile.component';
import { BreadcrumbsComponentModule } from 'src/app/components/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  crumbs = [{ label: 'Courses', url: '/courses-list' }];
}

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    LogoComponentModule,
    UserProfileComponentModule,
    BreadcrumbsComponentModule
  ],
  exports: [HeaderComponent]
})
export class HeaderComponentModule {}
