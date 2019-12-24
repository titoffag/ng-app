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
  private static TOKEN_KEY = 'token';
  private static LOGGED_IN_USER_KEY = 'loggedInUser';

  get isAuthenticated(): boolean {
    return !!localStorage.getItem(AuthService.TOKEN_KEY);
  }

  get userInfo(): string | null {
    return localStorage.getItem(AuthService.LOGGED_IN_USER_KEY);
  }

  get tokenInfo(): string | null {
    return localStorage.getItem(AuthService.TOKEN_KEY);
  }

  constructor(private router: Router, private http: HttpClient) {}

  login(loginInfo: Login) {
    this.http.post<Token>(apiUrlNames.LOGIN, loginInfo).subscribe(tokenInfo => {
      localStorage.setItem(AuthService.TOKEN_KEY, tokenInfo.token);
      this.loadUserInfo(tokenInfo);
    });
  }

  loadUserInfo(tokenInfo: Token) {
    this.http
      .post<User>(apiUrlNames.USER_INFO, tokenInfo)
      .subscribe(userInfo => {
        const userName = `${userInfo.name.firstName} ${userInfo.name.lastName}`;
        localStorage.setItem(AuthService.LOGGED_IN_USER_KEY, userName);
        this.router.navigate([appRoutesNames.COURSES]);
      });
  }

  logout() {
    localStorage.removeItem(AuthService.LOGGED_IN_USER_KEY);
    localStorage.removeItem(AuthService.TOKEN_KEY);
    this.router.navigate([appRoutesNames.LOGIN]);
  }
}
