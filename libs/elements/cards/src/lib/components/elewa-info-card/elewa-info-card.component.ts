import { Component, Input } from '@angular/core';

import { InfoCard } from '@elewa-website/models/schema/ui/cards';

@Component({
  selector: 'elewa-website-info-card',
  templateUrl: './elewa-info-card.component.html',
  styleUrls: ['./elewa-info-card.component.scss'],
})
export class ElewaInfoCardComponent {
  /** input cardData of type @interface InfoCard */
  @Input() cardsData!: InfoCard;
}
