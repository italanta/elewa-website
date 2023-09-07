import { Component } from '@angular/core';

import { __herotexts, __buttonData } from '@elewa-website/data/sections';

@Component({
  selector: 'elewa-website-booklets-hero-section',
  templateUrl: './booklets-hero-section.component.html',
  styleUrls: ['./booklets-hero-section.component.scss'],
})
export class BookletsHeroSectionComponent {
  herotexts = __herotexts
  buttonData = __buttonData
}
