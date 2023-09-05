import { Component } from '@angular/core';

import { __highlightedSDGList } from '@elewa-website/data/sections';

@Component({
  selector: 'elewa-website-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
})
export class AboutPageComponent {
  highlightedSDGList = __highlightedSDGList;
}
