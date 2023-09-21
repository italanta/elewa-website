import { Component } from '@angular/core';
import { __contentDevAboutTwo } from '@elewa-website/data/sections';

@Component({
  selector: 'elewa-website-elewa-content-dev-about-two',
  templateUrl: './elewa-content-dev-about-two.component.html',
  styleUrls: ['./elewa-content-dev-about-two.component.scss'],
})
export class ContentDevAboutTwoComponent {
  imageAndDetails = __contentDevAboutTwo;
}
