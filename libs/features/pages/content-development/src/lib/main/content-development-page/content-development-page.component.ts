import { Component } from '@angular/core';
import { ImageAndText } from '@elewa-website/models/schema/ui/image-and-text';
import { _imageAndTextData } from '@elewa-website/data/sections';

@Component({
  selector: 'elewa-website-content-development-page',
  templateUrl: './content-development-page.component.html',
  styleUrls: ['./content-development-page.component.scss'],
})
export class ContentDevelopmentPageComponent {
  /* an object(InputData) to input data using type ImageAndText from re-usable component */
  InputData : ImageAndText = {

    // content Data
    content: _imageAndTextData.contentData,

    // our image
    image: _imageAndTextData.imageData, 

    // positioning
    imagePosition: 'left', 
  };
}
