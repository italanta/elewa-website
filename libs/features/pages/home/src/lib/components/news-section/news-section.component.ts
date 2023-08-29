import { Component } from '@angular/core';
import { NewsItem } from '@elewa-website/models/schema/ui/cards';

@Component({
  selector: 'elewa-website-news-section',
  templateUrl: './news-section.component.html',
  styleUrls: ['./news-section.component.scss'],
})
export class NewsSectionComponent {
  /* Define the highlightedNews item once then create an array with three identical items*/
  highlightedNews: NewsItem = {
    title: 'Conversational learning ipsum dolar',
    description: 'Eos qui ratione voluptatem sequi nesciunt.',
    buttonText: 'Read more',
  };

  highlightedNewsArray: NewsItem[] = Array(3).fill(this.highlightedNews);
}
