import { Component } from '@angular/core';

import { SliderButtonData } from '@elewa-website/models/schema/ui/buttons';
import { __mockSliderButtonData } from '@elewa-website/data/ui/slider-button';

@Component({
  selector: 'elewa-website-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  buttonData: SliderButtonData = __mockSliderButtonData;
}
