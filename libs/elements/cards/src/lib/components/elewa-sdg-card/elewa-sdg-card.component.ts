import { Component, Input } from '@angular/core';

import { SDGCard } from '@elewa-website/models/schema/ui/cards';
import { ButtonData } from '@elewa-website/models/schema/ui/buttons';

@Component({
  selector: 'elewa-website-elewa-sdg-card',
  templateUrl: './elewa-sdg-card.component.html',
  styleUrls: ['./elewa-sdg-card.component.scss'],
})
export class ElewaSdgCardComponent {
  /** input cardData of type @interface SDGCard */
  @Input() cardsData!: SDGCard;
  /** input buttonData of type @interface ButtonData */
  @Input() buttonData!: ButtonData;
}
