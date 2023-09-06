import { Component, Input } from '@angular/core';

import { ImageAndDetails } from '@elewa-website/models/schema/ui/banners';

@Component({
  selector: 'elewa-image-and-details-banner',
  templateUrl: './elewa-image-and-details-banner.component.html',
  styleUrls: ['./elewa-image-and-details-banner.component.scss'],
})
export class ElewaImageAndDetailsBannerComponent {
  @Input() imageAnddetails!: ImageAndDetails;
 
}
