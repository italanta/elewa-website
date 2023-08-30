import { Component } from '@angular/core';
import { ContentText } from 'libs/models/schema/ui/texts/src/lib/content-text.interface';
import { ImageConfig } from '@elewa-website/models/schema/ui/images';
@Component({
  selector: 'elewa-website-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  contentData: ContentText = { /* Populate with content data */ };
  imageData: ImageConfig = { /* Populate with image configuration data */ };
}
