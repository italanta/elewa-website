import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'

@Component({
  selector: 'elewa-website-contact-page-form-section',
  templateUrl: './contact-page-form-section.component.html',
  styleUrls: ['./contact-page-form-section.component.scss'],
})
export class ContactPageFormSectionComponent {

  //generate form controls
  contactForm = this.fb.group({
    name: [''],
    companyName: [''],
    selectOption: [''],
    message: [''],
  })

  //inject the FormBuilder service
  constructor( private fb: FormBuilder) {

  }
}
