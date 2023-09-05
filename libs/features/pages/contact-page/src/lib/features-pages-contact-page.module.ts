import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactPageComponent } from './main/contact-page/contact-page.component';

import { ContactRoutingModule } from './contact-page.routing';
import { ContactPageFormSectionComponent } from './components/contact-page-form-section/contact-page-form-section.component';
 
import { ButtonsModule } from '@elewa-website/elements/layout/buttons';
@NgModule({
  imports: [CommonModule, ContactRoutingModule,ButtonsModule],
  declarations: [ContactPageComponent, ContactPageFormSectionComponent],
  exports: [ContactPageComponent],
})
export class ContactPageModule {}
