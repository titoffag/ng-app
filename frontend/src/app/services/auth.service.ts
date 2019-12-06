import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AuthorizedUserInfo } from '@constants/typings';
import { appRoutesNames } from '@views/app.routes.names';
import { getParsedValueFromStorage } from '@tools/get-storage-value';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private static IS_SIGN_IN_KEY = 'isSignIn';
  private static LOGGED_IN_USER_KEY = 'loggedInUser';

  constructor(private router: Router) {}

  login(login: string, password: string) {
    localStorage.setItem(
      AuthService.LOGGED_IN_USER_KEY,
      JSON.stringify({
        login,
        password
      })
    );
    localStorage[AuthService.IS_SIGN_IN_KEY] = true;
    this.router.navigate([appRoutesNames.COURSES]);
  }

  logout() {
    localStorage.removeItem(AuthService.LOGGED_IN_USER_KEY);
    localStorage[AuthService.IS_SIGN_IN_KEY] = false;
    this.router.navigate([appRoutesNames.LOGIN]);
  }

  get isAuthenticated(): boolean {
    try {
      return !!getParsedValueFromStorage(AuthService.IS_SIGN_IN_KEY)
    } catch (e) {
      console.error(e.message);
      return false;
    }
  }

  get userInfo(): AuthorizedUserInfo | null {
    try {
      return getParsedValueFromStorage(
        AuthService.LOGGED_IN_USER_KEY
      ) as AuthorizedUserInfo;
    } catch (e) {
      console.error(e.message);
      return null;
    }
  }
}
