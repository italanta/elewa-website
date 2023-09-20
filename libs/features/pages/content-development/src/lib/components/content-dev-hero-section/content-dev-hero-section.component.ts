import { Component } from '@angular/core';

import { __buttonData, __contentDevHeroTexts } from '@elewa-website/data/sections';

@Component({
  selector: 'elewa-website-content-dev-hero-section',
  templateUrl: './content-dev-hero-section.component.html',
  styleUrls: ['./content-dev-hero-section.component.scss'],
})
export class ContentDevHeroSectionComponent {
  heroTexts = __contentDevHeroTexts
  buttonData = __buttonData
}
