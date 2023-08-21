import { Component, Input } from '@angular/core';

import { ImageConfig, ImageVisualisation } from '../../../../../../../models/schema/ui/images/src/lib/image-config.interface';
/**  import { ImageConfig, ImageVisualisation } from '@elewa-website/models/schema/ui/images';*/

@Component({
  selector: 'elewa-website-elewa-image-container',
  templateUrl: './elewa-image-container.component.html',
  styleUrls: ['./elewa-image-container.component.scss'],
})
export class ElewaImageContainerComponent {
  @Input() config: ImageConfig[] = []; /** Expecting an array of ImageConfig objects*/

  getImageClass(visualisation: ImageVisualisation): string {
    switch (visualisation) {
      case ImageVisualisation.Pill:
        return 'pill-style';
      case ImageVisualisation.Stacked:
        return 'stacked-style';
      case ImageVisualisation.Window:
        return 'window-style';
      case ImageVisualisation.Card:
        return 'card-style';
      default:
        return '';
    }
  }

  getHighResImage(imageSrc: string): string {
    /** imageSrc is the original image source (image.jpg) */
    /** This line replaces '.jpg' with '-highres.jpg' in the image source */
    return imageSrc.replace('.jpg', '-highres.jpg');
  }
}

