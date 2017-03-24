import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Contact} from "../models/contact";
import {CONTACT_DATA} from "../data/contact-data";
import {AuthService} from "../shared/auth/auth.service";

@Injectable()
export class ContactsService {

  private API_ENDPOINT = 'https://nodejs-rest-contacts.scapp.io/api/';

  constructor(private http: Http, private authService: AuthService) { }

  getContacts() {
    this.authService.refreshToken();

    // add authorization header
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.authService.getAccessToken()});
    let options = new RequestOptions({ headers: headers });

    return this.http.get(this.API_ENDPOINT + '/contacts', options)
      .map((res:Response) => { return res.json(); });
  }
}
