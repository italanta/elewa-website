import { Component } from '@angular/core';

import { __highlightedPricingList } from '@elewa-website/data/sections';

@Component({
  selector: 'elewa-website-booklets-pricing-list-section',
  templateUrl: './booklets-pricing-list-section.component.html',
  styleUrls: ['./booklets-pricing-list-section.component.scss'],
})
export class BookletsPricingListSectionComponent {
  priceList = __highlightedPricingList
}
