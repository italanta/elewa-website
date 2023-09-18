import { Component, Input } from '@angular/core';

@Component({
  selector: 'elewa-website-pill-svg-component',
  templateUrl: './pill-svg-component.component.html',
  styleUrls: ['./pill-svg-component.component.scss'],
})
export class PillSvgComponentComponent {
  @Input({ required: true}) imageSrc!: string;
}
