// elewa-slider-button.component.ts
import { Component, Input } from '@angular/core';
import { SliderButton } from '../slider-button';

 
@Component({
  selector: 'elewa-website-slider-button', 
  templateUrl: './elewa-slider-button.component.html',
  styleUrls: ['./elewa-slider-button.component.html']
})
export class ElewaSliderButtonComponent {
  @Input() buttonData: SliderButton = {
    text: '',
    backgroundColor: '',
    color: '',
    borderColor: '',
    iconColor: '',
    iconBackgroundColor: '',
  };
}
