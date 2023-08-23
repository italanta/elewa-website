import {Component, EventEmitter, Input, Output} from '@angular/core';
import { ButtonData } from "@elewa-website/models/schema/ui/buttons";

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'elewa-normal-button',
  templateUrl: './normal-button.component.html',
  styleUrls: ['./normal-button.component.scss'],
})
export class NormalButtonComponent {
  /* Defined the Input decorator
  * passing data to child component
  * */
  @Input() buttonData !: ButtonData;

  /* Defined the Output decorator
  *  decorator is used to emit events from a child component to its parent component.
  * Used to trigger actions.
  * */
  @Output() buttonClick: EventEmitter<void> = new EventEmitter<void>();


  /* Onclick function emits the event, and any parent component
   that is listening for the buttonClick event will be notified  */
  onClick(): void{
    this.buttonClick.emit();
  }
}
