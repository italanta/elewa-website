import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ContactPageComponent } from './main/contact-page/contact-page.component';
import { AppHeaderModule } from '@elewa-website/elements/layout/header';
import { ContactPageFormSectionComponent } from './components/contact-page-form-section/contact-page-form-section.component';

import { ContactRoutingModule } from './contact-page.routing';

@NgModule({
  imports: [CommonModule, ContactRoutingModule, ReactiveFormsModule, AppHeaderModule],
  declarations: [ContactPageComponent, ContactPageFormSectionComponent],
  exports: [ContactPageComponent, ContactPageFormSectionComponent],
})
export class ContactPageModule {}
