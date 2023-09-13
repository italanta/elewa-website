import { Component, Input, OnInit } from '@angular/core';
import { __highlightedImage as imageData } from '@elewa-website/data/sections';
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
  // Define the getLayoutClass function 
  getLayoutClass(item: ImageAndText): string {
    // Implement your logic to determine the layout class based on the item
    // For example, you can access item.imagePosition and return a class name accordingly.
    if (item && item.imagePosition) {
      return item.imagePosition === 'left' ? 'left-image' : 'right-image';
    }
    // Return a default layout class if needed
    return 'default-layout';
  }
}
Define the getLayoutClass function within the component