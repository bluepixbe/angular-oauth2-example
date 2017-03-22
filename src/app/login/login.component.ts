import { Component, OnInit } from '@angular/core';
import {AuthService} from "../shared/auth/auth.service";

@Component({
  selector: 'bp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userName: string;
  password: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    console.log('login: execute login with user ' + this.userName + ' and pw ' +  this.password);
    this.authService.login(this.userName, this.password);
  }
}
