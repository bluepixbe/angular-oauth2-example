import { NgModule } from '@angular/core';

import {ContactsComponent} from "./contacts.component";
import {ContactsRoutingModule} from "./contacts-routing.module";

@NgModule({
  imports: [
    ContactsRoutingModule
  ],
  declarations: [
    ContactsComponent,
  ],
  entryComponents: [],
  providers: []
})
export class ContactsModule {
}
