import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}

  login(key: string, value: string) {
    console.log('store user info and token');
    localStorage.setItem(key, JSON.stringify(value));
  }

  logout() {
    console.log('wipe user info and token from local storage');
    localStorage.clear();
  }

  isAuthenticated(): boolean {
    return true;
  }

  getUserInfo(key) {
    const foundValue = localStorage.getItem(key);

    if (!foundValue) {
      throw new Error('Cannot find value in local storage by key');
    }

    return JSON.parse(foundValue);
  }
}
