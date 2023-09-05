import { Component } from '@angular/core';
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
}
