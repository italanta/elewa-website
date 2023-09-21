import { Component } from '@angular/core';

import { __bookletsAboutTwo } from '@elewa-website/data/sections';

@Component({
  selector: 'elewa-website-booklets-about-two-section',
  templateUrl: './booklets-about-two-section.component.html',
  styleUrls: ['./booklets-about-two-section.component.scss'],
})
export class BookletsAboutTwoSectionComponent {
  imageAndDetails = __bookletsAboutTwo
}
