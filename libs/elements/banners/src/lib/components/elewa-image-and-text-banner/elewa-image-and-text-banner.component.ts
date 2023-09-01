import { Component, Input } from '@angular/core';

/* imports for customizing models from external packages */
import { ImageConfig } from '@elewa-website/models/schema/ui/images';
import { ContentText } from '@elewa-website/models/schema/ui/texts';

@Component({
  selector: 'elewa-website-elewa-image-and-text-banner',
  templateUrl: './elewa-image-and-text-banner.component.html',
  styleUrls: ['./elewa-image-and-text-banner.component.scss'],
})
export class ElewaImageAndTextBannerComponent {

  /* input property for this component */
  @Input() ImageAndText!:{

    /* 0bject for text content */
    content: ContentText

    /*object for image configuration */
    image: ImageConfig
  }
}
