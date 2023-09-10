import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'elewa-website-contact-page-form-section',
  templateUrl: './contact-page-form-section.component.html',
  styleUrls: ['./contact-page-form-section.component.scss'],
})
export class ContactPageFormSectionComponent {

  /*generate form controls*/
  data = {}
  contactForm = this.fb.group({
    name: ['', Validators.required],
    companyName: ['', Validators.required],
    selectOption: ['', Validators.required],
    message: ['', Validators.required],
  })

 /* Submit form */
 onSubmit() {
  if (this.contactForm.valid) {
    const formData = this.contactForm.value;
    this.contactForm.reset();
}
}

  /*inject the FormBuilder service */
  constructor( private fb: FormBuilder) {

  }
}
