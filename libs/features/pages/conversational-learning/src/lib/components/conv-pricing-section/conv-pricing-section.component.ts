import { Component } from '@angular/core';
import { __highlightedPricingList } from '@elewa-website/data/sections';

@Component({
  selector: 'elewa-website-conv-pricing-section',
  templateUrl: './conv-pricing-section.component.html',
  styleUrls: ['./conv-pricing-section.component.scss'],
})
export class ConvPricingSectionComponent {
  priceList = __highlightedPricingList
}
