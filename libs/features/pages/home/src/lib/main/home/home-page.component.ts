import { Component } from '@angular/core';

import { SliderButtonData } from '@elewa-website/models/schema/ui/buttons';

@Component({
  selector: 'elewa-website-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  buttonData: SliderButtonData = {
    text: 'unlock your potential',

    /** base colors on button */
    color: '#ffffff',
    bgColor: '#292A50',
    iconColor: '#000000',
    borderColor: '#ffffff',
    iconBackgroundColor: '#ffffff',

    /** hover effect styles on the button  */
    hoverColor: '',
    hoverBgColor: '',
    hoverIconColor: '',
    hoverBorderColor: '',
    hoverIconBackgroundColor: '',
  };
}
