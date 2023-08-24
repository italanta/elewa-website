import { Component, Input } from '@angular/core';
import { __elewaImageData } from '@elewa-website/data/schema/ui/images';
import { ImageConfig, ImageVisualisation } from '@elewa-website/models/schema/ui/images';

@Component({
  selector: 'elewa-website-elewa-image-component',
  templateUrl: './elewa-image-component.component.html',
  styleUrls: ['./elewa-image-component.component.scss'],
})
export class ElewaImageComponentComponent {
  @Input() imageConfig: ImageConfig = __elewaImageData;

  /**
   * Cases for Image visualisation to be used as classes in HTML and scss component files
   * The Cases include pill, stacked, window and card
   */
  imageVisualisation(imageConfig: ImageConfig): string {
    switch (imageConfig.visualisation) {
      case ImageVisualisation.Pill:
        return 'pill';
      case ImageVisualisation.Stacked:
        return 'stacked';
      case ImageVisualisation.Window:
        return 'window';
      case ImageVisualisation.Card:
        return 'card';
      default:
        return '';
    }
  }
}
