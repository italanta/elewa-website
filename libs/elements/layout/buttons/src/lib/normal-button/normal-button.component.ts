import { Component, Input, EventEmitter, Output } from '@angular/core';
// imported the input Emitter and Output
import { ButtonData } from '@elewa-website/libs/models/schema/ui/buttons';

@Component({
  selector: 'elewa-normal-button',
  templateUrl: './normal-button.component.html',
  styleUrls: ['./normal-button.component.scss'],
})
export class NormalButtonComponent {
 
  @Input() buttonData: ButtonData = { text: '' };
  @Output() click: EventEmitter<void> = new EventEmitter<void>();
  isHovered = false;

  onButtonClick(): void {
    this.click.emit();
  }

}
