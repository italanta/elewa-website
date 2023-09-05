import { Component } from '@angular/core';

import { SliderButtonData } from '@elewa-website/models/schema/ui/buttons';

@Component({
  selector: 'elewa-website-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  buttonData: SliderButtonData = {
    text: '',

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
