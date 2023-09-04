import { Component, Input } from '@angular/core';

import { ImageAndText} from '@elewa-website/models/schema/ui/image-and-text';

@Component({
  selector: 'elewa-website-elewa-image-and-text-banner',
  templateUrl: './elewa-image-and-text-banner.component.html',
  styleUrls: ['./elewa-image-and-text-banner.component.scss'],
})
export class ElewaImageAndTextBannerComponent {

  /* input property now is ImageAndText */
  @Input() ImageAndText!: ImageAndText;

    // / *Function to determine layout order 
   getLayoutClass(): string {
    return this.ImageAndText.imagePosition === 'left' ? 'left-image' : 'right-image';
  }
  
}
