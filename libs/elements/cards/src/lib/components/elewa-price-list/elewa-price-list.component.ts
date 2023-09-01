import { Component, Input } from '@angular/core';
import { __highlightedPricingList } from '@elewa-website/data/sections';

import { PriceItem } from '@elewa-website/models/schema/ui/cards';


@Component({
  selector: 'elewa-website-elewa-price-list',
  templateUrl: './elewa-price-list.component.html',
  styleUrls: ['./elewa-price-list.component.scss'],
})
export class ElewaPriceListComponent {
  /** 
  * This variable represents a list of PriceItem objects
  * that are highlighted or featured in a pricing list.
 */
  highlightedPricingList:PriceItem[] = __highlightedPricingList;



}
