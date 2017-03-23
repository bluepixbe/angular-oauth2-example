import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable()
export class AuthService {
  isLoggedIn: boolean;
  redirectUrl: string;

  constructor() { }

  login(userName: string, password: string): Observable<boolean> {
    return Observable.of(true).delay(500).do(val => this.isLoggedIn = true);
  }

  hasValidToken() {
    return this.isLoggedIn;
  }

  logout() {
    this.isLoggedIn = false;
  }
}
