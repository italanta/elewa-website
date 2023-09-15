import { Component, Input } from '@angular/core';

@Component({
  selector: 'elewa-website-stacked-svg-component',
  templateUrl: './stacked-svg-component.component.html',
  styleUrls: ['./stacked-svg-component.component.scss'],
})
export class StackedSvgComponentComponent {
  @Input({ required: true }) imageSrc!: string;
}
