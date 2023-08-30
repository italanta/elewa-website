import { Component } from '@angular/core';
import { __highlightedPricingList } from '@elewa-website/data/sections';
import { PriceItem } from '@elewa-website/models/schema/ui/cards';

@Component({
  selector: 'elewa-website-elewa-price-list',
  templateUrl: './elewa-price-list.component.html',
  styleUrls: ['./elewa-price-list.component.scss'],
})
export class ElewaPriceListComponent {
  pricingList: PriceItem [];
  constructor(){
    this.pricingList =__highlightedPricingList;
  }
}
