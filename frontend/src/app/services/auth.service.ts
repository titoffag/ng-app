import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

import { apiUrlNames } from '@constants/api.names';
import { Login, Token } from '@models/login';
import { User } from '@models/user';
import { AppState } from '@store/reducers';
import { getAuthenticated, getTokenInfo } from '@store/auth/auth.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  get tokenInfo() {
    return this.store.pipe(select(getTokenInfo));
  }

  get isAuthenticated() {
    return this.store.pipe(select(getAuthenticated));
  }

  constructor(private http: HttpClient, private store: Store<AppState>) {}

  login(loginInfo: Login): Observable<Token> {
    return this.http.post<Token>(apiUrlNames.LOGIN, loginInfo);
  }

  loadUserInfo(tokenInfo: Token): Observable<User> {
    return this.http.post<User>(apiUrlNames.USER_INFO, tokenInfo);
  }
}
