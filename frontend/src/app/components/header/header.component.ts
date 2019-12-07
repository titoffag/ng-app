import { Component, NgModule, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
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
export class HeaderComponent implements OnInit, OnDestroy {
  crumbs: MenuItem[] | void;
  eventSub: Subscription;

  constructor(
    private authService: AuthService,
    private crumbsService: CrumbsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.eventSub = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe({
        next: () =>
          (this.crumbs = this.crumbsService.createBreadcrumbs(this.route.root))
      });
  }

  ngOnDestroy() {
    this.eventSub.unsubscribe();
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