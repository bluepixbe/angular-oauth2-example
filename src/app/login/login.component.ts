import { Component, OnInit } from '@angular/core';
import {AuthService} from "../shared/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'bp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userName: string;
  password: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    if(this.authService.hasValidToken()) {
      this.router.navigate(['dashboard']);
    }
  }

  login() {
    console.log('login: execute login with user ' + this.userName + ' and pw ' +  this.password);

    this.authService.login(this.userName, this.password).subscribe(() => {
      console.log('login: check valid token');

      if (this.authService.hasValidToken()) {
        console.log('login: successful');
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/dashboard';

        // Redirect the user
        console.log('login: redirect to ' + redirect);
        this.router.navigate([redirect]);
      }
    });
  }
}
