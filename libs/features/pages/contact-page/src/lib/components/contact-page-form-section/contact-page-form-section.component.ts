import { Component } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
@Component({
  selector: 'elewa-website-contact-page-form-section',
  templateUrl: './contact-page-form-section.component.html',
  styleUrls: ['./contact-page-form-section.component.scss'],
})
export class ContactPageFormSectionComponent {
  buttonData = {
    text: 'Send message',
    /** base colors on button */
    color: '#ffffff',
    bgColor: '#292A50',
    iconColor: '#000000',
    borderColor: '#000000',
    iconBackgroundColor: '#ffffff',

    /** hover effect styles on the button  */
    hoverColor: '#000000',
    hoverBgColor: '#ffffff',
    hoverIconColor: '#000000',
    hoverBorderColor: '#00000',
    hoverIconBackgroundColor: '#000000',
  };
  formData!: FormGroup;
  
   handleSubmit(){
    console.log(this.formData.value)
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
}
