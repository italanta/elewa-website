import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SliderButtonData } from '@your-lib/models'; // Import the SliderButtonData interface

@Component({
  selector: 'app-elewa-slider-button',
  templateUrl: './elewa-slider-button.component.html',
  styleUrls: ['./elewa-slider-button.component.css'],
})
export class ElewaSliderButtonComponent {
  @Input() buttonData: SliderButtonData; // Input data of type SliderButtonData
  @Output() click: EventEmitter<void> = new EventEmitter<void>(); // Output event for click
}
