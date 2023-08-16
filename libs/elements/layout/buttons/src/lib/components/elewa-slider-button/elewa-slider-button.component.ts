import { Component, Input } from '@angular/core';
import { SliderButtonData } from '@elewa-website/models/schema/ui/buttons';

@Component({
  selector: 'elewa-website-slider-button',
  templateUrl: './elewa-slider-button.component.html',
  styleUrls: ['./elewa-slider-button.component.scss'],
})
export class SliderButtonComponent {
  @Input() buttonData?: SliderButtonData;
}
