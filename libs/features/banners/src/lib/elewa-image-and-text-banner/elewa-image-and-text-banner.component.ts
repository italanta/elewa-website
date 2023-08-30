import { Component, Input } from '@angular/core';
import { ImageAndText } from '../../../../../models/schema/ui/image-text/src/lib/image-text.module';
import { ContentText } from 'libs/models/schema/ui/texts/src/lib/content-text.interface';
import { ImageConfig } from '@elewa-website/models/schema/ui/images';
import { ImageVisualisation } from '../../../../../models/schema/ui/images/src/index';
@Component({
  selector: 'elewa-website-elewa-image-and-text-banner',
  templateUrl: './elewa-image-and-text-banner.component.html',
  styleUrls: ['./elewa-image-and-text-banner.component.scss'],
})
export class ElewaImageAndTextBannerComponent {
  @Input() content!: ContentText;
  @Input() image!: ImageConfig;

  getImageVisualisationClass(visualisation: ImageVisualisation): string {
    switch (visualisation) {
      case ImageVisualisation.Pill:
        return 'pill';
      case ImageVisualisation.Pill:
        return 'pill';
      default:
        return '';
    }
  }
}
