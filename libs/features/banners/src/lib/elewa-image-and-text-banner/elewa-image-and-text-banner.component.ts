import { Component, Input } from '@angular/core';
import { ContentText } from 'libs/models/schema/ui/texts/src/lib/content-text.interface';
import { ImageConfig } from '@elewa-website/models/schema/ui/images';
import { ImageVisualisation } from '@elewa-website/models/schema/ui/images';

@Component({
  selector: 'elewa-website-elewa-image-and-text-banner',
  templateUrl: './elewa-image-and-text-banner.component.html',
  styleUrls: ['./elewa-image-and-text-banner.component.scss'],
})
export class ElewaImageAndTextBannerComponent {
  @Input() contentData!: ContentText[];
  @Input() imageData!: ImageConfig[];

  getImageVisualisationClass(visualisation: ImageVisualisation): string {
    switch (visualisation) {
      case ImageVisualisation.Pill:
        return 'pill';
      default:
        return '';
    }
  }
}
