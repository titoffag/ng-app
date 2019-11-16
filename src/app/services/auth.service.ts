import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private IS_SIGN_IN_KEY = 'isSignIn';
  private LOGGED_IN_USER_KEY = 'loggedInUser';

  constructor(private router: Router) {}

  login(login: string, password: string) {
    localStorage.setItem(
      this.LOGGED_IN_USER_KEY,
      JSON.stringify({
        login,
        password
      })
    );
    localStorage.setItem(this.IS_SIGN_IN_KEY, 'true');
    this.router.navigate(['/courses']);
  }

  logout() {
    localStorage.removeItem(this.LOGGED_IN_USER_KEY);
    localStorage.setItem(this.IS_SIGN_IN_KEY, 'false');
    this.router.navigate(['/login']);
  }

  get isAuthenticated(): boolean {
    return !!this.getValueFromStorage(this.IS_SIGN_IN_KEY);
  }

  get userInfo(): Object {
    return this.getValueFromStorage(this.LOGGED_IN_USER_KEY);
  }

  getValueFromStorage(key: string): Object {
    const foundValue = localStorage.getItem(key);

    if (!foundValue) {
      throw new Error(`Cannot find value by ${key} key`);
    }

    return JSON.parse(foundValue);
  }
}
