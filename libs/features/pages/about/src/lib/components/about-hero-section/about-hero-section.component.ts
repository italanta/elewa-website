import { Component } from '@angular/core';

import { __aboutImageAndTextData } from '@elewa-website/data/sections';

@Component({
  selector: 'elewa-website-about-hero-section',
  templateUrl: './about-hero-section.component.html',
  styleUrls: ['./about-hero-section.component.scss'],
})
export class AboutHeroSectionComponent {
  heroText = __aboutImageAndTextData.heroText;
  image = __aboutImageAndTextData.image;
}
