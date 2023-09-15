import { Component } from '@angular/core';

import { __contentDevAboutOne } from '@elewa-website/data/sections';
import { ImageAndText } from '@elewa-website/models/schema/ui/image-and-text';

@Component({
  selector: 'elewa-website-consultancy-about-one',
  templateUrl: './consultancy-about-one.component.html',
  styleUrls: ['./consultancy-about-one.component.scss'],
})
export class ConsultancyAboutOneComponent {
  imageData = __contentDevAboutOne;

  getLayoutClass(item: ImageAndText): string {
    return item.imagePosition === 'left' ? 'left-image' : 'right-image';
  }
}
