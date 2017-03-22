import {Injectable} from "@angular/core";
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {AuthService} from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.checkLogin();
  }

  checkLogin(): boolean {
    if (this.authService.hasValidToken()) { return true; }

    // Store the attempted URL for redirecting
    //this.authService.redirectUrl = url;
    // Navigate to the login page
    console.log('checkLogin: not auth; redirect user to login');
    this.router.navigate(['/login']);
    return false;
  }
}
