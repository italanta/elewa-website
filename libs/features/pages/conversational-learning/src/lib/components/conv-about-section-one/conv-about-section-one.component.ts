import { Component } from '@angular/core';

import { ImageAndText } from '@elewa-website/models/schema/ui/image-and-text';
import { __convLearningAboutOne } from '@elewa-website/data/sections';

@Component({
  selector: 'elewa-website-conv-about-section-one',
  templateUrl: './conv-about-section-one.component.html',
  styleUrls: ['./conv-about-section-one.component.scss'],
})
export class ConvAboutSectionOneComponent {
  aboutData: ImageAndText = __convLearningAboutOne;
}
