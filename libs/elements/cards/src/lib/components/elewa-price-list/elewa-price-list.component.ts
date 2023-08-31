import { Component, Input } from '@angular/core';
import { __highlightedPricingList } from '@elewa-website/models/data/sections';
import { PriceItem } from '@elewa-website/models/schema/ui/cards';

@Component({
  selector: 'elewa-website-elewa-price-list',
  templateUrl: './elewa-price-list.component.html',
  styleUrls: ['./elewa-price-list.component.scss'],
})
export class ElewaPriceListComponent {
  somePriceItemData: PriceItem[] = []; // Initialize with an empty array
  @Input() pricingList: PriceItem[] = [];

  constructor(){
    // Assign mock data to the property;
    this.pricingList = __highlightedPricingList;
  }
}
