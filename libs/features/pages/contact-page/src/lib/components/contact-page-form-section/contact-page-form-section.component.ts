import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { SliderButtonData } from '@elewa-website/models/schema/ui/buttons';

@Component({
  selector: 'elewa-website-contact-page-form-section',
  templateUrl: './contact-page-form-section.component.html',
  styleUrls: ['./contact-page-form-section.component.scss'],
})
export class ContactPageFormSectionComponent {
  contactForm: FormGroup;
  isMessageSent = false; /**Property to track button state */ 

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
    /**Form submission functionality */
    this.isMessageSent = true;
  }

  sendButtonData: SliderButtonData = {
    text: "Send message"
  }
}

