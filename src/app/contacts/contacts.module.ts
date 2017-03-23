import { NgModule } from '@angular/core';

import {ContactsComponent} from "./contacts.component";
import {ContactsRoutingModule} from "./contacts-routing.module";
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import {CommonModule} from "@angular/common";
import {ContactsService} from "./contacts.service";

@NgModule({
  imports: [
    CommonModule,
    ContactsRoutingModule
  ],
  declarations: [
    ContactsComponent,
    ContactsListComponent,
  ],
  entryComponents: [],
  providers: [
    ContactsService
  ]
})
export class ContactsModule {
}
