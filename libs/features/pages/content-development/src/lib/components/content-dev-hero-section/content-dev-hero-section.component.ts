import { Component } from '@angular/core';

import { __heroTexts } from '@elewa-website/data/sections';
import { SliderButtonData } from '@elewa-website/models/schema/ui/buttons';

@Component({
  selector: 'elewa-website-content-dev-hero-section',
  templateUrl: './content-dev-hero-section.component.html',
  styleUrls: ['./content-dev-hero-section.component.scss'],
})
export class ContentDevHeroSectionComponent {
  heroTexts = __heroTexts

  buttonData: SliderButtonData = {
    text: "unlock your potential"
  }


}
