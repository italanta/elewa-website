import { Component } from '@angular/core';
import { __textData, __buttonData } from '@elewa-website/data/sections';

@Component({
  selector: 'elewa-website-booklets-hero-section',
  templateUrl: './booklets-hero-section.component.html',
  styleUrls: ['./booklets-hero-section.component.scss'],
})
export class BookletsHeroSectionComponent {
  textData = __textData;
  buttonData = __buttonData;
}
