import { Component } from '@angular/core';
import { ImageAndText } from '@elewa-website/models/schema/ui/image-and-text';

import { __contentDevAboutOne } from '@elewa-website/data/sections';

@Component({
  selector: 'elewa-website-elewa-content-dev-about-one',
  templateUrl: './elewa-content-dev-about-one.component.html',
  styleUrls: ['./elewa-content-dev-about-one.component.scss'],
})
export class ContentDevAboutOneComponent {
  InputData: ImageAndText = __contentDevAboutOne;
}