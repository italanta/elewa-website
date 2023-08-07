import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'elewa-normal-button',
  templateUrl: './normal-button.component.html',
  styleUrls: ['./normal-button.component.scss'],
})
export class NormalButtonComponent {
  @Input() buttonData:ButtonData = {};
  @Output() buttonClick: EventEmitter<void> = new EventEmitter<void>();

  isHovered: boolean = false;

  onClick(){
    this.buttonClick.emit();
  }
}
