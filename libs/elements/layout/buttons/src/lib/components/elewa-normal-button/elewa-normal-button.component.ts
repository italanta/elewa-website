import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ButtonData } from '@elewa-website/models/schema/ui/buttons';

@Component({
  selector: 'elewa-website-elewa-normal-button',
  templateUrl: './elewa-normal-button.component.html',
  styleUrls: ['./elewa-normal-button.component.scss'],
})
export class ElewaNormalButtonComponent {

  @Input() buttonData!: ButtonData;

  @Output() buttonClicked: EventEmitter<void> = new EventEmitter<void>();

  isHovered = false;

  onButtonClick(): void {
    this.buttonClicked.emit();
  }

  onMouseEnter(): void {
    this.isHovered = true;
  }

  onMouseLeave(): void {
    this.isHovered = false;
  }
}
