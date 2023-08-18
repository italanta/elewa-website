import { SliderButton } from '@elewa-website/models/schema/ui/buttons';
import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'elewa-website-slider-button',
  templateUrl: './elewa-slider-button.component.html',
  styleUrls: ['./elewa-slider-button.component.scss']
})
export class ElewaSliderButtonComponent {
  @Input() buttonData: SliderButton = {
    text: 'unlock your potential',
    bgColour: '#000000',
    color: 'white',
    borderColor: 'transparent',
    iconColor: '#606060',
    iconBackgroundColor: 'white',
  };

  @Output() buttonClicked: EventEmitter<void> = new EventEmitter<void>() ;

  onClick(): void {
    this.buttonClicked.emit();
  }
  onMouseenter(): void {
    this.onMouseenter
  }

  onMouseleave(): void {
    this.onMouseleave
  }
}

