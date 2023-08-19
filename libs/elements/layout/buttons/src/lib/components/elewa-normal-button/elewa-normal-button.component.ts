import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ButtonData } from '@elewa-website/models/schema/ui/buttons';

@Component({
  selector: 'elewa-website-elewa-normal-button',
  templateUrl: './elewa-normal-button.component.html',
  styleUrls: ['./elewa-normal-button.component.scss'],
})
export class ElewaNormalButtonComponent {

  @Input() buttonData!: ButtonData; // Input property to receive button data from parent component

  @Output() buttonClicked: EventEmitter<void> = new EventEmitter<void>(); // Output event to emit when the button is clicked


  isHovered = false; // Flag to track hover state of the button

  // Function triggered when the button is clicked
  onButtonClick(): void {
    this.buttonClicked.emit();
  }

}
