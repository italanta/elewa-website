// Importing necessary components and modules from Angular and other sources
import { Component, Input} from '@angular/core';
import { NewsItem } from '@elewa-website/models/schema/ui/cards/cards-module';
import { __highlightedNews } from '@elewa-website/models/schema/ui/cards/cards-module';

// Defining a new Angular component named ElewaNewsItemCardComponent
@Component({
  selector: 'elewa-website-elewa-news-item-card',
  templateUrl: './elewa-news-item-card.component.html',
  styleUrls: ['./elewa-news-item-card.component.scss'],
})
export class ElewaNewsItemCardComponent {

  // Declaring an input property named 'item'
  @Input() item!: NewsItem

  // Creating an array 'newsItem' to store highlighted news items
  newsItem: NewsItem[] = __highlightedNews;
}
