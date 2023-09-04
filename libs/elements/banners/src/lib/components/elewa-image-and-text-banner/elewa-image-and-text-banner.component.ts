import { Component, Input } from '@angular/core';

import { ImageAndText } from '@elewa-website/models/schema/ui/banners';

@Component({
  selector: 'elewa-website-elewa-image-and-text-banner',
  templateUrl: './elewa-image-and-text-banner.component.html',
  styleUrls: ['./elewa-image-and-text-banner.component.scss'],
})
export class ElewaImageAndTextBannerComponent {
  @Input() imageAndText!: ImageAndText;

  /**
   * Calculates the CSS style for positioning the image within the banner.
   *
   * @param {string} imagePosition - The desired position of the image ('left', 'right', or other).
   * @returns {Object} An object representing the CSS style.
   * @memberof ElewaImageAndTextBannerComponent
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
