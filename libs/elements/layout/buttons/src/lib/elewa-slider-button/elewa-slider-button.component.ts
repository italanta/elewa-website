import { Component, Input, Output, EventEmitter } from '@angular/core';

import { SliderButtonData } from '../../../../../../models/schema/ui/buttons/slider-button-data.interface'

@Component({
  selector: 'elewa-website-elewa-slider-button',
  templateUrl: './elewa-slider-button.component.html',
  styleUrls: ['./elewa-slider-button.component.scss'],
})
export class ElewaSliderButtonComponent {
  @Input() data!: SliderButtonData; // Input property to receive data from parent component
  @Output() buttonClick: EventEmitter<void> = new EventEmitter<void>(); // Output event emitter for button clicks

  isHovered = false; // Indicates whether the button is hovered
  // Emit the buttonClick event when the button is clicked
  emitClick() {
    this.buttonClick.emit();
  }
}


