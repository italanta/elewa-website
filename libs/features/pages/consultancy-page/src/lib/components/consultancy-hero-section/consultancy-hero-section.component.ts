import { Component } from '@angular/core';
import { heroTexts, __buttonData } from '@elewa-website/data/sections';


@Component({
  selector: 'elewa-website-consultancy-hero-section',
  templateUrl: './consultancy-hero-section.component.html',
  styleUrls: ['./consultancy-hero-section.component.scss'],
})
export class ConsultancyHeroSectionComponent {
  heroTexts = heroTexts;
  buttonData = __buttonData;
}
