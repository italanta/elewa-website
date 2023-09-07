import { Component } from '@angular/core';

import { __highlightedPricingList } from '@elewa-website/data/sections';
@Component({
  selector: 'elewa-website-elewa-price-list',
  templateUrl: './elewa-price-list.component.html',
  styleUrls: ['./elewa-price-list.component.scss']
})
export class ElewaPriceListComponent {
  highlightedPricingList = __highlightedPricingList
}
