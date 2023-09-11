import { Component, Input } from '@angular/core';
import { ImageAndText } from '@elewa-website/models/schema/ui/image-and-text';

@Component({
  selector: 'elewa-website-consultancy-about-one',
  templateUrl: './consultancy-about-one.component.html',
  styleUrls: ['./consultancy-about-one.component.scss'],
})
export class ConsultancyAboutOneComponent {
  @Input() imageData!: ImageAndText[];

  getLayoutClass(item: ImageAndText): string {
    return item.imagePosition === 'left' ? 'left-image' : 'right-image';
  }
}
