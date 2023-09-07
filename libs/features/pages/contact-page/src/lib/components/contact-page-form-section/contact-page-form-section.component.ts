import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { __buttonData } from '@elewa-website/data/sections';

@Component({
  selector: 'elewa-website-contact-page-form-section',
  templateUrl: './contact-page-form-section.component.html',
  styleUrls: ['./contact-page-form-section.component.scss'],
})
export class ContactPageFormSectionComponent implements OnInit {
  contactForm!: FormGroup;

  isMessageSent = false; /** Property to track button state */

  buttonData = __buttonData;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createContactForm();
  }

  createContactForm() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      company: [''],
      email: ['', [Validators.required, Validators.email]],
      reason: ['general', Validators.required],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    /** Form submission functionality */
    this.isMessageSent = true;
  }
}


