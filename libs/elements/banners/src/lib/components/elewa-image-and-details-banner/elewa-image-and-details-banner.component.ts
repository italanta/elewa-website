import { Component, Input } from '@angular/core';

import { ImageAndDetails } from '@elewa-website/models/schema/ui/banners';

@Component({
  selector: 'elewa-website-image-and-details-banner',
  templateUrl: './elewa-image-and-details-banner.component.html',
  styleUrls: ['./elewa-image-and-details-banner.component.scss'],
})
export class ElewaImageAndDetailsBannerComponent {
  @Input() imageAndDetails!: ImageAndDetails;

  getLayoutClass(imagePosition: string): string {
    const val =  imagePosition === 'left' ? 'left-image' : 'right-image';
    return val
  }
}
