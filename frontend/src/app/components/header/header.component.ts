import { Component, NgModule, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { MenuItem } from 'primeng/api';
import { select, Store } from '@ngrx/store';

import { LogoComponentModule } from '@components/logo/logo.component';
import { UserProfileComponentModule } from '@components/user-profile/user-profile.component';
import { BreadcrumbsComponentModule } from '@components/breadcrumbs/breadcrumbs.component';
import { CrumbsService } from '@services/crumbs.service';
import { AppState } from '@store/reducers';
import { getAuthenticated } from '@store/auth/auth.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  crumbs: MenuItem[] | void;
  eventSub: Subscription;
  isLoggedIn$ = this.store.pipe(select(getAuthenticated));

  constructor(
    private store: Store<AppState>,
    private crumbsService: CrumbsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.eventSub = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(
        () =>
          (this.crumbs = this.crumbsService.createBreadcrumbs(this.route.root))
      );
  }

  ngOnDestroy() {
    this.eventSub.unsubscribe();
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
