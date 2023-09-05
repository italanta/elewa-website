import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannersModule } from '@elewa-website/elements/banners';
import { ImageAndText } from '@elewa-website/models/schema/ui/image-and-text';

@Component({
  selector: 'elewa-website-booklets-page-text-image-banner-section',
  standalone: true,
  imports: [CommonModule, BannersModule],
  templateUrl: './booklets-page-text-image-banner-section.component.html',
  styleUrls: ['./booklets-page-text-image-banner-section.component.scss'],
})
export class BookletsPageTextImageBannerSectionComponent {

  /* input property from image-and-text component */
  @Input() ImageAndText !:ImageAndText
}
