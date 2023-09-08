import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'elewa-website-contact-page-form-section',
  templateUrl: './contact-page-form-section.component.html',
  styleUrls: ['./contact-page-form-section.component.scss'],
})
export class ContactPageFormSectionComponent {
  name = new FormControl('');
  companyname = new FormControl('');
  email = new FormControl('');
  option = new FormControl('');
  message = new FormControl('');
}
