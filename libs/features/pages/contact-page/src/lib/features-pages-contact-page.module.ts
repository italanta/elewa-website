import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactPageFormSectionComponent } from './components/contact-page-form-section/contact-page-form-section.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [ContactPageFormSectionComponent],
  exports: [ContactPageFormSectionComponent],
})
export class FeaturesPagesContactPageModule {}
