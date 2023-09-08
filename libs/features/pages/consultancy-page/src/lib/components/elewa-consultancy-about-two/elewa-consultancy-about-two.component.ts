import { Component } from '@angular/core';
// import { ImageAndText } from '@elewa-website/models/schema/ui/image-and-text'; // Import the ImageAndText type
import { __imageAndTextData } from '@elewa-website/data/sections';

@Component({
  selector: 'elewa-website-elewa-consultancy-about-two',
  templateUrl: './elewa-consultancy-about-two.component.html',
  styleUrls: ['./elewa-consultancy-about-two.component.scss'],
})
export class ElewaConsultancyAboutTwoComponent {
  imageAndTextData = __imageAndTextData
}
