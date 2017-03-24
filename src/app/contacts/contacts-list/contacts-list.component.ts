import { Component, OnInit } from '@angular/core';
import {ContactsService} from "../contacts.service";
import {Contact} from "../../models/contact";
import {Observable} from "rxjs";

@Component({
  selector: 'bp-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {
  contacts: Observable<Array<Contact>>;

  constructor(private contactsService: ContactsService) { }

  ngOnInit() {
    // this.contactsService.getContacts()
    //   .subscribe( contacts => this.contacts = contacts);
    this.contacts = this.contactsService.getContacts();
  }
}
