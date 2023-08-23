import { Component, Input } from '@angular/core';
import { PriceItem } from '@elewa-website/models/schema/ui/cards';

@Component({
  selector: 'elewa-website-elewa-website-price-item-card',
  templateUrl: './elewa-website-price-item-card.component.html',
  styleUrls: ['./elewa-website-price-item-card.component.scss'],
})

export class ElewaWebsitePriceItemCardComponent {
  private _priceItem!: PriceItem;

  /**
   * Property to store the formatted price string.
   */
  formattedPrice = '';

  /**
   * Setter for the `priceItem` input property.
   * This method is automatically called when the `priceItem` input is set externally.
   * It updates the private `_priceItem` property and formats the price using commas.
   * 
   * @param {PriceItem} value - The new value for the `priceItem` input.
   */
  @Input()
  set priceItem(value: PriceItem) {
    this._priceItem = value;
    this.formattedPrice = this.formatPriceWithCommas(value.amount);
  }

  /**
   * Getter for the `priceItem` input property.
   * 
   * @returns {PriceItem} The current value of the `priceItem` input.
   */
  get priceItem(): PriceItem {
    return this._priceItem;
  }

  /**
   * Converts a number to a formatted price string with commas for thousands.
   * 
   * @param {number} number - The number to be converted.
   * @returns {string} The formatted price string.
   */
  formatPriceWithCommas(number: number): string {
    return number.toLocaleString('en-US');
  }
}