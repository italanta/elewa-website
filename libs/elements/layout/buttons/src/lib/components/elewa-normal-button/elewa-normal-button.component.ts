import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ButtonData } from '@elewa-website/models/schema/ui/buttons';

@Component({
  selector: 'elewa-website-elewa-normal-button',
  templateUrl: './elewa-normal-button.component.html',
  styleUrls: ['./elewa-normal-button.component.scss'],
})

export class ElewaNormalButtonComponent {
  /** Input property to customize button appearance and behavior */
  @Input() buttonData!: ButtonData;

  /** Output Property which emits click events when the button is clicked */

  @Output() buttonClick: EventEmitter<void> = new EventEmitter<void>();

  /** tracks whether the button is being hovered */
  isHovered = false;

  /** triggers the buttonClick event emitter, indicating that the button has been clicked.*/
  handleClick(): void {
    this.buttonClick.emit();
  }

  /** Set hovered state to true when mouse enters */
  handleMouseEnter(): void {
    this.isHovered = true;
  }

  /** Set hovered state to false when mouse leaves */
  handleMouseLeave(): void {
    this.isHovered = false;
  }
}
