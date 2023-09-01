import { Component, Input } from '@angular/core';
import { PriceItem } from '@elewa-website/models/schema/ui/cards';

@Component({
  selector: 'elewa-website-elewa-price-list',
  templateUrl: './elewa-price-list.component.html',
  styleUrls: ['./elewa-price-list.component.scss'],
})
export class ElewaPriceListComponent {
  @Input() priceitem!: PriceItem
}
