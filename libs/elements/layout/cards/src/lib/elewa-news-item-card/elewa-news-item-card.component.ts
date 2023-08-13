import { Component, Input } from '@angular/core';
import {NewsItem} from '../../../../../../models/schema/ui/cards/news-item.interface'

@Component({
  selector: 'elewa-website-elewa-news-item-card',
  templateUrl: './elewa-news-item-card.component.html',
  styleUrls: ['./elewa-news-item-card.component.scss'],
})
export class ElewaNewsItemCardComponent {
  @Input() newsItem!: NewsItem;
}
