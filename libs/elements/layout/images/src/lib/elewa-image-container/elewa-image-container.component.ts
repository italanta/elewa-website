import { Component, Input } from '@angular/core';
import { ImageConfig, ImageVisualisation } from '@elewa-website/models/schema/ui/images';

@Component({
  selector: 'elewa-website-elewa-image-container',
  templateUrl: './elewa-image-container.component.html',
  styleUrls: ['./elewa-image-container.component.scss'],
})
export class ElewaImageContainerComponent {
  @Input() imageconfigs : ImageConfig[] = []
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
}
