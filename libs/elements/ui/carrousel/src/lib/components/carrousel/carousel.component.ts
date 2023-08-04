import { Component, Input } from '@angular/core';
 
import { ReferenceImage } from '@elewa-website/models/ui/images';

@Component({
  selector: 'elewa-website-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
/**
 * A carousel displays a series of images that reference some of the past clients 
 *  or other highlighted work. It slowly cycles through them and on click allows the user
 *  to navigate to their website or the project website.
 */
export class CarouselComponent 
{
  /** Images to load */
  @Input() references : ReferenceImage[] = [
    { 
      src: '/assets/clients/client-image.png',
      actionUrl: 'https://www.google.com',
      isGray: true,
    }
  ];
}
