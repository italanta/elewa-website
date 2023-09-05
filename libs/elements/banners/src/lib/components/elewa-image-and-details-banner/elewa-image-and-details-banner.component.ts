import { Component, Input } from '@angular/core';

import { ImageAndDetails } from '@elewa-website/models/schema/ui/banners';

@Component({
  selector: 'elewa-image-and-details-banner',
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

  getPositionStyle(imagePosition: string) :string  {
    switch (imagePosition) {
      case 'left':
        return "info-card-image-left";
      case 'right':
        return "info-card-image-right";
      default:
        return ""; // default value
    }
  }
  
}
