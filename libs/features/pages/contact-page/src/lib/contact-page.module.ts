import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactPageComponent } from './main/contact-page/contact-page.component';

import { ContactPageRoutingModule } from './contact-page.routing';

@NgModule({
  imports: [CommonModule, ContactPageRoutingModule],
  declarations: [ContactPageComponent],
  exports: [ContactPageComponent],
})
export class ContactPageModule {}
