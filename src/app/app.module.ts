import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule, BaseRequestOptions} from '@angular/http';

import {AppComponent} from './app.component';
import {HeaderComponent} from './core/header/header.component';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AppRoutingModule} from "./app-routing.module";
import {HomeComponent} from './home/home.component';
import {AuthGuard} from "./shared/auth/auth.guard";
import {AuthService} from "./shared/auth/auth.service";
import { OAuthModule } from 'angular-oauth2-oidc';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    OAuthModule.forRoot()
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
