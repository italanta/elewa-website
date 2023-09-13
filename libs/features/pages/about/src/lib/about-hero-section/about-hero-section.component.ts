import { Component, Input, OnInit } from '@angular/core';
import {
  __highlightedImage as imageData,
  getLayoutClass,
} from '@elewa-website/data/sections';
import { ImageAndText } from '@elewa-website/models/schema/ui/image-and-text';
import {
  ImageConfig,
  ImageVisualisation,
} from '@elewa-website/models/schema/ui/images';

@Component({
  selector: 'elewa-website-about-hero-section',
  templateUrl: './about-hero-section.component.html',
  styleUrls: ['./about-hero-section.component.scss'],
})
export class AboutHeroSectionComponent implements OnInit {
  @Input() imageData!: ImageAndText[];

  ngOnInit() {
    // Assign the imported data to imageData directly
    this.imageData = imageData;
  }

  mapImageAndTextToImageConfig(item: ImageAndText): ImageConfig {
    return {
      title: item.content.title,
      imageSrc: item.image.imageSrc,
      visualisation: item.image.visualisation || ImageVisualisation.Stacked, // Set a default value
    };
  }

  // Reference the imported getLayoutClass function
  getLayoutClass(item: ImageAndText): string {
    return getLayoutClass(item);
  }
}
