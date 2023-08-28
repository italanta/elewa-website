import { Component, Input, OnInit} from '@angular/core';
import { NewsItem } from '@elewa-website/models/schema/ui/cards';


// Component
@Component({
  selector: 'elewa-website-elewa-news-item-card',
  templateUrl: './elewa-news-item-card.component.html',
  styleUrls: ['./elewa-news-item-card.component.scss'],
})
export class ElewaNewsItemCardComponent implements OnInit {

  @Input() item!: NewsItem;


}
