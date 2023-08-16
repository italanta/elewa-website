// elewa-slider-button.component.ts
import { Component, Input } from '@angular/core';
import { SliderButton } from '@elewa-website/models/schema/ui/buttons';

 
@Component({
  selector: 'elewa-website-slider-button', 
  templateUrl: './elewa-slider-button.component.html',
  styleUrls: ['./elewa-slider-button.component.scss']
})
export class ElewaSliderButtonComponent {
  @Input() buttonData: SliderButton = {
    text: '',
    bgColour: '',
    color: '',
    borderColor: '',
    iconColor: '',
    iconBackgroundColor: '',
  };
}
