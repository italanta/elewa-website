import { Component,OnInit } from '@angular/core';

import { FormControl,FormGroup } from '@angular/forms';
import { __buttonData } from '@elewa-website/models/data/sections';
@Component({
  selector: 'elewa-website-contact-page-form-section',
  templateUrl: './contact-page-form-section.component.html',
  styleUrls: ['./contact-page-form-section.component.scss'],
})
export class ContactPageFormSectionComponent  implements OnInit{
buttonData = __buttonData;
  formData!: FormGroup;

   handleSubmit(){
  this.formData.value
   }
   buildContactForm(){
    this.formData =new FormGroup({
      name: new FormControl(''),
      companyName: new FormControl(''),
      email: new FormControl(''),
      option: new FormControl(''),
      message: new FormControl(''),
    })
   }
 
ngOnInit(){
  this.buildContactForm();
}
}
