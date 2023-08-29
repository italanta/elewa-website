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

  getImageVisualisationClass(visualisation: ImageVisualisation): string {
    switch (visualisation) {
      case ImageVisualisation.Pill:
        return 'pill';
      case ImageVisualisation.stacked:
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
