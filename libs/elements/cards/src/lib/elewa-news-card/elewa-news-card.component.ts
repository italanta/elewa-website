import { Component, Input, OnInit } from '@angular/core';

import { _highlightedNews as newsContent } from '@elewa-website/data/ui/content-text';
import { NewsItem } from '@elewa-website/models/schema/ui/cards';

@Component({
  selector: 'elewa-website-elewa-news-card',
  templateUrl: './elewa-news-card.component.html',
  styleUrls: ['./elewa-news-card.component.scss'],
})
export class ElewaNewsCardComponent implements OnInit{
  @Input() newsData!: NewsItem[];

  ngOnInit() {
    this.newsData = newsContent;
  }
}
