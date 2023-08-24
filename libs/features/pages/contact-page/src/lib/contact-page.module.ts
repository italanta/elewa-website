import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact.routing';

import { ContactPageComponent } from './main/contact-page/contact-page.component';

@NgModule({
  imports: [CommonModule, ContactRoutingModule],
  declarations: [ContactPageComponent],
})
export class ContactPageModule {}
