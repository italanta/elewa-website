// elewa-slider-button.component.ts
import { Component, Input } from '@angular/core';

interface SliderButton {
  text: string;
  backgroundColor: string;
  color: string;
  borderColor: string;
  iconColor: string;
  iconBackgroundColor: string;
}
 
@Component({
  selector: 'elewa-website-slider-button', 
  templateUrl: ''
  styles: []
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
