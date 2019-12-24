import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from '@angular/router';
import { Observable, of } from 'rxjs';

import { AuthService } from '@services/auth.service';
import { appRoutesNames } from '@views/app.routes.names';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | UrlTree {
    if (next.routeConfig) {
      const { isAuthenticated } = this.authService;

      if (next.routeConfig.path === appRoutesNames.LOGIN) {
        const coursesPageUrlTree = this.router.parseUrl(appRoutesNames.COURSES);

        return of(!isAuthenticated) || coursesPageUrlTree;
      }

      const loginPageUrlTree = this.router.parseUrl(appRoutesNames.LOGIN);

      return of(isAuthenticated) || loginPageUrlTree;
    }

    return of(false);
  }
}
