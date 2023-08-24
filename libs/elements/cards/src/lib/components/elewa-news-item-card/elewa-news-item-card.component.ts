import { Component, Input } from '@angular/core';
import { NewsItem } from '@elewa-website/models/schema/ui/cards';


@Component({
  selector: 'elewa-website-elewa-news-item-card',
  templateUrl: './elewa-news-item-card.component.html',
  styleUrls: ['./elewa-news-item-card.component.scss'],
})
export class ElewaNewsItemCardComponent {
  @Input() newsItem!: NewsItem;
}
