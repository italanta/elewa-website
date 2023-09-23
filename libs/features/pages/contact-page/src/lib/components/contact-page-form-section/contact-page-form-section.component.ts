import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { GoogleTagManagerService } from 'angular-google-tag-manager';

import { __buttonData } from '@elewa-website/data/sections';

@Component({
  selector: 'elewa-website-contact-page-form-section',
  templateUrl: './contact-page-form-section.component.html',
  styleUrls: ['./contact-page-form-section.component.scss'],
})
export class ContactPageFormSectionComponent implements OnInit {
  contactForm!: FormGroup;

  buttonData = __buttonData;

  constructor(private _gtmService: GoogleTagManagerService) {}

  ngOnInit(): void {
    this.buildContactForm();
  }

  buildContactForm() {
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      company: new FormControl(''),
      email: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required]),
    });
  }

  handleSubmit() {
    const userFormData = this.contactForm.value;
    this.createEmailDoc(userFormData);
  }

  goToSocial(url: string) {
    window.open(url, '_blank');
  }

  createEmailDoc(contactData: any) {
    const gtmTag = {
      event: 'submit-contact-form',
      eventCategory: 'Form Submitted',
      eventAction: 'Contact Form',
      pageName: '/contact',
      subject: contactData.message,
    };

    return this._gtmService.pushTag(gtmTag);
  }
}
