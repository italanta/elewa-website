import { Component } from '@angular/core';

import { __highlightedNewsItems } from '@elewa-website/data/sections';

@Component({
  selector: 'elewa-website-news-section',
  templateUrl: './news-section.component.html',
  styleUrls: ['./news-section.component.scss'],
})
export class NewsSectionComponent {
  /** highlightedNews initialised with mock Data.*/
  highlightedNews = __highlightedNewsItems;
}
