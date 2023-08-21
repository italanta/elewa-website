import { Component, Input } from '@angular/core';

import { PriceItem } from '@elewa-website/models/schema/ui/cards';

@Component({
  selector: 'elewa-website-elewa-website-price-item-card',
  templateUrl: './elewa-website-price-item-card.component.html',
  styleUrls: ['./elewa-website-price-item-card.component.scss'],
})
export class ElewaWebsitePriceItemCardComponent {
  @Input() priceItem!: PriceItem;
}
