import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannersModule } from '@elewa-website/elements/banners';
import { ImageAndText } from '@elewa-website/models/schema/ui/image-and-text';
import { _imageAndTextData } from '@elewa-website/data/sections';

@Component({
  selector: 'elewa-website-booklets-page-text-image-banner-section',
  standalone: true,
  imports: [CommonModule, BannersModule],
  templateUrl: './booklets-page-text-image-banner-section.component.html',
  styleUrls: ['./booklets-page-text-image-banner-section.component.scss'],
})
export class BookletsPageTextImageBannerSectionComponent {

  /*Where to set an input Object/Data */
  InputData : ImageAndText = {

    // content Data
    content: _imageAndTextData.contentData,

    // our image
    image: _imageAndTextData.imageData, 
    // positioning
    imagePosition: 'left', 
  };
}
