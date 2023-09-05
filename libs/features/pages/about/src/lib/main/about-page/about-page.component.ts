import { Component } from '@angular/core';

import { __highlightedSDGList } from '@elewa-website/data/sections';
import { __mockSliderButtonData } from '@elewa-website/data/ui/content-text';

@Component({
  selector: 'elewa-website-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
})
export class AboutPageComponent {
  sdgList = __highlightedSDGList;
  buttonData = __mockSliderButtonData;
}
