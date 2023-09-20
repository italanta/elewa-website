import { Component, Input } from '@angular/core';

import { NewsItem } from '@elewa-website/models/schema/ui/cards';

@Component({
  selector: 'elewa-website-elewa-news-item-card',
  templateUrl: './elewa-news-item-card.component.html',
  styleUrls: ['./elewa-news-item-card.component.scss'],
})
export class ElewaNewsItemCardComponent {
  @Input() item!: NewsItem;

  openBlogPost(url: string) {
    window.open(url, '_self');
  }

  trancateDescription(description: string) {
    return `${description.substring(0, 80)}...`;
  }
}
