import { Component } from '@angular/core';

import { ImageAndText } from '@elewa-website/models/schema/ui/image-and-text';
import { __contentDevAboutTwo } from '@elewa-website/data/sections';

@Component({
  selector: 'elewa-website-consultancy-about-two',
  templateUrl: './consultancy-about-two.component.html',
  styleUrls: ['./consultancy-about-two.component.scss'],
})
export class ConsultancyAboutTwoComponent {
  imageData = __contentDevAboutTwo;

  getLayoutClass(item: ImageAndText): string {
    return item.imagePosition === 'left' ? 'left-image' : 'right-image';
  }
}
