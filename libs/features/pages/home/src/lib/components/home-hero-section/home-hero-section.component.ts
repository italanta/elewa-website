import { Component } from '@angular/core';
import { __homeImageAndTextData } from '@elewa-website/data/sections';

@Component({
  selector: 'elewa-website-home-hero-section',
  templateUrl: './home-hero-section.component.html',
  styleUrls: ['./home-hero-section.component.scss'],
})
export class HomeHeroSectionComponent {
  heroText = __homeImageAndTextData.heroText;
  buttonData = __homeImageAndTextData.buttonData;
  heroImage = __homeImageAndTextData.image;
}
