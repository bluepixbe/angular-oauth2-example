import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Contact} from "../models/contact";
import {CONTACT_DATA} from "../data/contact-data";
import {AuthService} from "../shared/auth/auth.service";

@Injectable()
export class ContactsService {

  //private API_ENDPOINT = 'http://localhost:8080/api';
  private contacts: Array<Contact> = CONTACT_DATA;

  constructor(private http: Http, private authService: AuthService) { }

  getContacts() {
    return this.contacts;

    // // add authorization header with jwt token
    // let headers = new Headers({ 'Authorization': 'Bearer ' + this.authService.getAccessToken()});
    // let options = new RequestOptions({ headers: headers });
    //
    // return this.http.get(this.API_ENDPOINT + '/contacts', options)
    //   .map((res:Response) => { return res.json(); })
    //   .map((data) => { return data.items; });
  }
}
