import { Component, Input, OnInit } from '@angular/core';
import { ImageAndText } from '@elewa-website/models/schema/ui/image-and-text';
import {
  __highlightedImage as imageData,
  getLayoutClass,
} from '@elewa-website/models/data/sections';

@Component({
  selector: 'elewa-website-elewa-consultancy-about-one',
  templateUrl: './elewa-consultancy-about-one.component.html',
  styleUrls: ['./elewa-consultancy-about-one.component.scss'],
})
export class ElewaConsultancyAboutOneComponent implements OnInit {
  @Input() imageData!: ImageAndText[];

  ngOnInit() {
    // Assign the imported data to imageData directly
    this.imageData = imageData;
    // Debugging: Log the loaded data
    // console.log('Loaded imageData:', this.imageData);
  }

  // Reference the imported getLayoutClass function
  getLayoutClass(item: ImageAndText): string {
    return getLayoutClass(item);
  }
}
