import { Component, Input, OnInit} from '@angular/core';

import { ImageAndText } from '@elewa-website/models/schema/ui/image-and-text';
import { __highlightedImageData as highlightedImageData, getLayoutClass } from '@elewa-website/data/sections';


@Component({
  selector: 'elewa-website-elewa-consultancy-about-two',
  templateUrl: './elewa-consultancy-about-two.component.html',
  styleUrls: ['./elewa-consultancy-about-two.component.scss'],
})
export class ElewaConsultancyAboutTwoComponent implements OnInit {
  @Input() imageData !: ImageAndText[];
  
  ngOnInit(){
    this.imageData = highlightedImageData;
  }

  getLayoutClass(item: ImageAndText): string {
    return getLayoutClass(item);
  }
}
