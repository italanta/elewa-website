import { Component, Input } from '@angular/core';
import {
  ImageConfig,
  ImageVisualisation,
} from '../../../../../../models/schema/ui/images/src/lib/image-config.interface';

@Component({
  selector: 'elewa-website-elewa-image-container',
  templateUrl: './elewa-image-container.component.html',
  styleUrls: ['./elewa-image-container.component.scss'],
})
export class ElewaImageContainerComponent {
  @Input() imageConfigs: ImageConfig[] = []; // Use an array of ImageConfig

  getImageVisualisationName(visualisation: ImageVisualisation): string {
    switch (visualisation) {
      case ImageVisualisation.Pill:
        return 'Pill';
      case ImageVisualisation.stacked:
        return 'Stacked';
      case ImageVisualisation.Window:
        return 'Window';
      case ImageVisualisation.Card:
        return 'Card';
      default:
        return '';
    }
  }
}
