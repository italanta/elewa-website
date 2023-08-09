import { Component, Input } from '@angular/core';
import { ButtonData } from '../button.interface';

@Component({
  selector: 'elewa-website-elewa-normal-button',
  templateUrl: './elewa-normal-button.component.html',
  styleUrls: ['./elewa-normal-button.component.scss'],
})
export class ElewaNormalButtonComponent {
  @Input() buttonData!:ButtonData;
}
