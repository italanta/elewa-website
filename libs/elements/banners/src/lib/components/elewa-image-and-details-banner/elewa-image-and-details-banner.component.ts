import { Component, Input } from '@angular/core';

import { ImageAndDetails } from '@elewa-website/models/schema/ui/banners';

@Component({
  selector: 'elewa-website-elewa-image-and-details-banner',
  templateUrl: './elewa-image-and-details-banner.component.html',
  styleUrls: ['./elewa-image-and-details-banner.component.scss'],
})
export class ElewaImageAndDetailsBannerComponent {
  @Input() imageAnddetails!: ImageAndDetails;

    /**
   * Get the CSS style for the image position based on the provided string.
   *
   * @param {string} imagePosition - The position of the image ('left' or 'right').
   * @returns {{ [key: string]: string }} - An object representing CSS styles.
   */

  getPositionStyle(imagePosition: string): { [key: string]: string } {
    switch (imagePosition) {
      case 'left':
        return { 'order': '0' };
      case 'right':
        return { 'order': '1' };
      default:
        return { 'order': '0' }; // default value
    }
  }
  
}
