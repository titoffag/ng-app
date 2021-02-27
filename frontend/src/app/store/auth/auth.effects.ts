import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

import { AuthService } from '@services/auth.service';
import * as fromAuth from '@store/auth';
import { appRoutesNames } from '@views/app.routes.names';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromAuth.login),
      map(action => action.loginInfo),
      mergeMap(loginInfo =>
        this.authService.login(loginInfo).pipe(
          map(token => fromAuth.loginSuccess({ token })),
          tap(() => this.router.navigate([appRoutesNames.COURSES])),
          catchError(error =>
            of(fromAuth.loginFailure({ error: error.statusText }))
          )
        )
      )
    )
  );

  getUserInfo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromAuth.getUserInfo),
      map(action => action.token),
      mergeMap(token =>
        this.authService.loadUserInfo(token).pipe(
          map(userInfo => fromAuth.getUserInfoSuccess({ userInfo })),
          catchError(error =>
            of(fromAuth.getUserInfoFailure({ error: error.statusText }))
          )
        )
      )
    )
  );

  logout$ = this.actions$.pipe(
    ofType(fromAuth.logout),
    tap(() => this.router.navigate([appRoutesNames.LOGIN]))
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}
}
