import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ButtonsModule } from '@elewa-website/elements/layout/buttons';
import { MainPageModule } from '@elewa-website/elements/layout/pages/main-page';

import { ContactPageComponent } from './main/contact-page/contact-page.component';
import { ContactPageFormSectionComponent } from './components/contact-page-form-section/contact-page-form-section.component';

import { ContactRoutingModule } from './contact-page.routing';
import { ContactNumbersSectionComponent } from './components/contact-numbers-section/contact-numbers-section.component';

@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule,
    ButtonsModule,
    MainPageModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ContactPageComponent,
    ContactPageFormSectionComponent,
    ContactNumbersSectionComponent,
  ],
  exports: [ContactPageComponent, ContactPageFormSectionComponent],
})
export class ContactPageModule {}
