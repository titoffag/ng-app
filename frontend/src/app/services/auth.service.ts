import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { appRoutesNames } from '@views/app.routes.names';
import { apiUrlNames } from '@constants/api.names';
import { Login, Token } from '@models/login';
import { User } from '@models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  static TOKEN_KEY = 'token';
  private static LOGGED_IN_USER_KEY = 'loggedInUser';

  constructor(private router: Router, private http: HttpClient) {}

  login(loginInfo: Login) {
    this.http.post<Token>(apiUrlNames.LOGIN, loginInfo).subscribe({
      next: tokenInfo => {
        localStorage.setItem(AuthService.TOKEN_KEY, tokenInfo.token);

        this.loadUserInfo(tokenInfo);
      }
    });
  }

  loadUserInfo(tokenInfo: Token) {
    this.http.post<User>(apiUrlNames.USER_INFO, tokenInfo).subscribe({
      next: userInfo => {
        const userName = `${userInfo.name.firstName} ${userInfo.name.lastName}`;

        localStorage.setItem(AuthService.LOGGED_IN_USER_KEY, userName);
      },
      complete: () => {
        this.router.navigate([appRoutesNames.COURSES]);
      }
    });
  }

  logout() {
    localStorage.removeItem(AuthService.LOGGED_IN_USER_KEY);
    localStorage.removeItem(AuthService.TOKEN_KEY);
    this.router.navigate([appRoutesNames.LOGIN]);
  }

  get isAuthenticated(): boolean {
    return !!localStorage.getItem(AuthService.TOKEN_KEY);
  }

  get userInfo(): string | null {
    return localStorage.getItem(AuthService.LOGGED_IN_USER_KEY);
  }
}
