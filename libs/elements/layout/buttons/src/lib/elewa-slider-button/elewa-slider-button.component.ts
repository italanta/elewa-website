import { Component, Input } from '@angular/core';
import { SliderButtonData } from '@elewa-website/models/schema/ui/buttons';


@Component({
  selector: 'elewa-website-elewa-slider-button',
  templateUrl: './elewa-slider-button.component.html',
  styleUrls: ['./elewa-slider-button.component.scss'],
})
export class ElewaSliderButtonComponent {
  @Input() sliderButtonData!: SliderButtonData;
  @Input() currentStyles!:object;
  @Input() iconCurrentStyles!:object;
  @Input() hoveredCurrentStyles!:object;
  @Input() hoveredIconCurrentStyles!:object;
  @Input() hovered!:boolean;
  
}
