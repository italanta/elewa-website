import { Component, Input } from '@angular/core';

@Component({
  selector: 'elewa-website-window-svg-component',
  templateUrl: './window-svg-component.component.html',
  styleUrls: ['./window-svg-component.component.scss'],
})
export class WindowSvgComponentComponent {
  @Input({ required: true }) imageSrc!: string;
}
