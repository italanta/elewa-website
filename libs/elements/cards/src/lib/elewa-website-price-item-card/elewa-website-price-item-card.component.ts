import { Component, Input } from '@angular/core';
import { PriceItem } from '@elewa-website/models/schema/ui/cards';

@Component({
  selector: 'elewa-website-elewa-website-price-item-card',
  templateUrl: './elewa-website-price-item-card.component.html',
  styleUrls: ['./elewa-website-price-item-card.component.scss'],
})
export class ElewaWebsitePriceItemCardComponent {
  @Input() priceItem!: PriceItem;

  /**
   * Converts a number to a formatted price string with commas for thousands.
   * 
   * @param {number} number - The number to be converted.
   * @returns {string} The formatted price string.
   */
  formatPriceWithCommas(number: number): string {
    return number.toLocaleString('en-US');
  }

  // Property to store the formatted price string
  formattedPrice = '';

  ngOnChanges() {
    if (this.priceItem) {
      this.formattedPrice = this.formatPriceWithCommas(this.priceItem.amount);
    }
  }
}
