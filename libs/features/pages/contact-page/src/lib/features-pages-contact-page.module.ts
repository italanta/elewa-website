import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactPageComponent } from './main/contact-page/contact-page.component';

import { ContactRoutingModule } from './contact-page.routing';

@NgModule({
  imports: [CommonModule, ContactRoutingModule],
  declarations: [ContactPageComponent],
  exports: [ContactPageComponent]
})
export class ContactPageModule {}
