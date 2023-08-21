import { Component, Input } from '@angular/core';
import { InfoCard } from '@elewa-website/models/schema/ui/cards';
import { content as mockContent } from '@elewa-website/data/ui/infocard-data';

@Component({
  selector: 'elewa-website-elewa-info-card',
  templateUrl: './elewa-info-card.component.html',
  styleUrls: ['./elewa-info-card.component.scss'],
})
export class ElewaInfoCardComponent {
  @Input() cardInfo!: InfoCard [];
  content: InfoCard[];

  constructor () {
    this.content = mockContent;
} 
}
