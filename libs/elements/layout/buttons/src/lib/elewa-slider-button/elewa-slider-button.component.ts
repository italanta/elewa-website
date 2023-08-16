import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SliderButtonData } from '../../../../../../models/schema/ui/buttons/slider-button-data.interface'

@Component({
  selector: 'elewa-website-elewa-slider-button',
  templateUrl: './elewa-slider-button.component.html',
  styleUrls: ['./elewa-slider-button.component.scss'],
})
export class ElewaSliderButtonComponent {
  // non-null operatoe
  @Input() data!: SliderButtonData;
  // eslint-disable-next-line @angular-eslint/no-output-native
  @Output() click: EventEmitter<void> = new EventEmitter<void>();
}
