import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonData } from '../button.interface';

@Component({
  selector: 'elewa-website-elewa-normal-button',
  templateUrl: './elewa-normal-button.component.html',
  styleUrls: ['./elewa-normal-button.component.scss'],
})

/*Pass data to the component */
/* emit events from the template that the normal button can respond to*/
export class ElewaNormalButtonComponent {
  @Input() buttonData!:ButtonData;
  @Output() buttonClick: EventEmitter<void> = new EventEmitter<void>();

}
