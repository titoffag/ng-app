import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { MenuItem } from 'primeng/api';

import { LogoComponentModule } from '@components/logo/logo.component';
import { UserProfileComponentModule } from '@components/user-profile/user-profile.component';
import { BreadcrumbsComponentModule } from '@components/breadcrumbs/breadcrumbs.component';
import { AuthService } from '@services/auth.service';
import { CrumbsService } from '@services/crumbs.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  crumbs: MenuItem[] | void;

  constructor(
    private authService: AuthService,
    private crumbsService: CrumbsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(
        () =>
          (this.crumbs = this.crumbsService.createBreadcrumbs(this.route.root))
      );
  }

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
