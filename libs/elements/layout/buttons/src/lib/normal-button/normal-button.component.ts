import { Component, Input, EventEmitter, Output } from '@angular/core';
// imported the input
@Component({
  selector: 'elewa-normal-button',
  templateUrl: './normal-button.component.html',
  styleUrls: ['./normal-button.component.scss'],
})
export class NormalButtonComponent {
 
  @Input() buttonText: string = '';

}
