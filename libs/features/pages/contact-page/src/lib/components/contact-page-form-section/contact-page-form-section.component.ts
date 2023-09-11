import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { __buttonData } from '@elewa-website/data/sections';

@Component({
  selector: 'elewa-website-contact-page-form-section',
  templateUrl: './contact-page-form-section.component.html',
  styleUrls: ['./contact-page-form-section.component.scss'],
})
export class ContactPageFormSectionComponent implements OnInit {
  contactForm!: FormGroup;

  buttonData = __buttonData;

  ngOnInit(): void {
    this.buildContactForm();
  }

  handleSubmit() {
    this.contactForm.value;
  }

  buildContactForm() {
    this.contactForm = new FormGroup({
      name: new FormControl(''),
      companyName: new FormControl(''),
      email: new FormControl(''),
      option: new FormControl(''),
      message: new FormControl(''),
    });
  }
}
