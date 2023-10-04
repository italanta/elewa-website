import { Component } from '@angular/core';
import { __bookletsHeroData, __buttonData } from '@elewa-website/data/sections';

@Component({
  selector: 'elewa-website-booklets-hero-section',
  templateUrl: './booklets-hero-section.component.html',
  styleUrls: ['./booklets-hero-section.component.scss'],
})
export class BookletsHeroSectionComponent {
  textData = __bookletsHeroData;
  buttonData = __buttonData;
}
