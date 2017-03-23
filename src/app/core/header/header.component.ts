import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../shared/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'bp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();

    // Redirect the user
    console.log('logout: redirect to home');
    this.router.navigate(['home']);
  }
}
