import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { ContactPageComponent } from './main/contact-page/contact-page.component';

import { ContactRoutingModule } from './contact-page.routing';
import { ContactPageFormSectionComponent } from './components/contact-page-form-section/contact-page-form-section.component';

import { ButtonsModule } from '@elewa-website/elements/layout/buttons';
import { AppHeaderModule } from '@elewa-website/elements/layout/header';

@NgModule({
  imports: [CommonModule, ContactRoutingModule, ButtonsModule, ReactiveFormsModule, AppHeaderModule],
  declarations: [ContactPageComponent, ContactPageFormSectionComponent],
  exports: [ContactPageComponent, ContactPageFormSectionComponent],
})
export class ContactPageModule {}
