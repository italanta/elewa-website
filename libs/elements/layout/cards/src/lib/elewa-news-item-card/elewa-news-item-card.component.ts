import { Component } from '@angular/core';
import {NewsItem} from '../../../../../../models/schema/ui/cards/news-item.interface'
import {__highlightedNews} from '../../../../../../models/data/sections/highlighted-news.data'

@Component({
  selector: 'elewa-website-elewa-news-item-card',
  templateUrl: './elewa-news-item-card.component.html',
  styleUrls: ['./elewa-news-item-card.component.scss'],
})
export class ElewaNewsItemCardComponent {
  highlightedNews:NewsItem[] = __highlightedNews
}
