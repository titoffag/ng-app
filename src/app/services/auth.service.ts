import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

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
    this.router.navigate(['/courses']);
  }

  logout() {
    localStorage.removeItem(AuthService.LOGGED_IN_USER_KEY);
    localStorage[AuthService.IS_SIGN_IN_KEY] = false;
    this.router.navigate(['/login']);
  }

  get isAuthenticated(): boolean {
    return !!this.getValueFromStorage(AuthService.IS_SIGN_IN_KEY);
  }

  get userInfo(): object {
    return this.getValueFromStorage(AuthService.LOGGED_IN_USER_KEY);
  }

  getValueFromStorage(key: string): object {
    const foundValue = localStorage[key];

    if (!foundValue) {
      throw new Error(`Cannot find value by ${key} key`);
    }

    return JSON.parse(foundValue);
  }
}
