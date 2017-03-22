import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  isLoggedIn: boolean;

  constructor() { }

  login(userName: string, password: string) {
    this.isLoggedIn = true;
  }

  hasValidToken() {
    return this.isLoggedIn;
  }

  logout() {
    this.isLoggedIn = false;
  }
}
