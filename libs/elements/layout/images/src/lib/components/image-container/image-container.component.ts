import { Component, Input } from '@angular/core';

import { ImageConfig } from '@elewa-website/models/schema/ui/images';
import { ImageVisualisation } from '@elewa-website/models/schema/ui/images';

@Component({
  selector: 'elewa-website-image-container',
  templateUrl: './image-container.component.html',
  styleUrls: ['./image-container.component.scss'],
})
export class ImageContainerComponent {
  /**
   * The configuration object for the image.
   */
  @Input() imageConfig!: ImageConfig;

  /**
   * Returns the CSS class name based on the provided image visualization.
   * @param {ImageVisualisation} visualisation - The image visualization type.
   * @returns {string} The corresponding CSS class name.
   */
  getClassName(visualisation: ImageVisualisation): string {
    switch (visualisation) {
      case ImageVisualisation.Pill:
        return 'image-pill';
      case ImageVisualisation.stacked:
        return 'image-stacked';
      case ImageVisualisation.Window:
        return 'image-window';
      case ImageVisualisation.Card:
        return 'image-card';
      default:
        return '';
    }
  }
}