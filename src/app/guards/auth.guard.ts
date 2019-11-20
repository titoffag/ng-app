import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
  Resolve
} from '@angular/router';

import { AuthService } from '@services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (next && next.routeConfig) {
      if (next.routeConfig.path !== 'login') {
        // for unauthorized users redirect to login page
        if (!this.authService.isAuthenticated) {
          this.router.navigate(['login']);
        }

        return this.authService.isAuthenticated;
      }

      // for authorized users redirect to courses list page
      if (this.authService.isAuthenticated) {
        this.router.navigate(['courses']);
      }

      return !this.authService.isAuthenticated;
    }

    return false;
  }
}
