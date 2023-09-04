import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'elewa-website-contact-page-form-section',
  templateUrl: './contact-page-form-section.component.html',
  styleUrls: ['./contact-page-form-section.component.scss'],
})
export class ContactPageFormSectionComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      company: [''],
      email: ['', [Validators.required, Validators.email]],
      reason: ['general', Validators.required],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    // Add logic to handle form submission here
    // You can access form values using this.contactForm.value
    // Don't forget to unsubscribe from any observables if needed.
  }
}

