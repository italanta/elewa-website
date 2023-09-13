import { Component } from '@angular/core';
import { homeHeroText, buttonData } from '@elewa-website/data/sections';

@Component({
  selector: 'elewa-website-home-hero-section',
  templateUrl: './home-hero-section.component.html',
  styleUrls: ['./home-hero-section.component.scss'],
})
export class HomeHeroSectionComponent {
  textData = homeHeroText;
  buttonData = buttonData;
}
