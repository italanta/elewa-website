import { Component, Input, OnInit } from '@angular/core';

import { __highlightedNews as highlightedNewsData } from '@elewa-website/data/sections';
import { NewsItem } from '@elewa-website/models/schema/ui/cards';

@Component({
  selector: 'elewa-website-elewa-news-item-card',
  templateUrl: './elewa-news-item-card.component.html',
  styleUrls: ['./elewa-news-item-card.component.scss'],
})
export class ElewaNewsItemCardComponent implements OnInit  {
  @Input() newsItem!: NewsItem[]
  
  ngOnInit() {
      this.newsItem = highlightedNewsData
  }
}
