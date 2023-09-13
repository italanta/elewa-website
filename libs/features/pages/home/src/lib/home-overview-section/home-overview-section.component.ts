import { Component, Input, OnInit } from '@angular/core';
import {
  __highlightedImage as imageData,
  getLayoutClass,
} from '@elewa-website/data/sections';
import { ImageAndText } from '@elewa-website/models/schema/ui/image-and-text';
import { ImageVisualisation } from '@elewa-website/models/schema/ui/images';

@Component({
  selector: 'elewa-website-home-overview-section',
  templateUrl: './home-overview-section.component.html',
  styleUrls: ['./home-overview-section.component.scss'],
})
export class HomeOverviewSectionComponent implements OnInit {
  @Input() imageData!: ImageAndText[];

  ngOnInit() {
    // Assign the imported data to imageData directly
    this.imageData = imageData;
  }

  // Create a method to return ImageVisualisation enum
  getImageVisualisation(): typeof ImageVisualisation {
    return ImageVisualisation;
  }
  // Reference the imported getLayoutClass function
  getLayoutClass(item: ImageAndText): string {
    return getLayoutClass(item);
  }
}
