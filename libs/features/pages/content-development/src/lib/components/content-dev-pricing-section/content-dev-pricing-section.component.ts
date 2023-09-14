import { Component } from '@angular/core';
import { __highlightedPricingList } from '@elewa-website/data/sections';

@Component({
  selector: 'elewa-website-content-dev-pricing-section',
  templateUrl: './content-dev-pricing-section.component.html',
  styleUrls: ['./content-dev-pricing-section.component.scss'],
})
export class ContentDevPricingSectionComponent {
  priceList = __highlightedPricingList
}
