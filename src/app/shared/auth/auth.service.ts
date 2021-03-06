import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {OAuthService} from "angular-oauth2-oidc";

@Injectable()
export class AuthService {
  redirectUrl: string;

  constructor(private oAuthService: OAuthService) { }

  login(userName: string, password: string) : Observable<any> {
    //return Observable.of(true).delay(500).do(val => this.isLoggedIn = true);

    return Observable.fromPromise(this.oAuthService.fetchTokenUsingPasswordFlow('max', 'geheim').then((resp) => {
      // Loading data about the user
      return this.oAuthService.loadUserProfile();
    }).then(() => {
      // Using the loaded user data
      let claims = this.getIdentityClaims();
      if (claims) console.debug('given_name', claims.given_name);
      return claims;
    }));
  }

  hasValidToken() {
    var hasIdToken = this.oAuthService.hasValidIdToken();
    var hasAccessToken = this.oAuthService.hasValidAccessToken();
    console.log('authService.hasValidToken: id token ' + hasIdToken + ' access token ' + hasAccessToken);

    //return (hasIdToken && hasAccessToken);
    return hasAccessToken;
  }

  getAccessToken() {
    return this.oAuthService.getAccessToken();
  }

  getIdentityClaims() {
    return this.oAuthService.getIdentityClaims();
  }

  getIdentityClaimsName() {
    let claims = this.getIdentityClaims();
    return claims ? claims.given_name + ' ' + claims.family_name : 'User';
  }

  refreshToken() {
    this.oAuthService.refreshToken().then(() => {
      console.debug('authService.refreshToken: ok');
    })
  }

  logout() {
    this.oAuthService.logOut();
  }
}
