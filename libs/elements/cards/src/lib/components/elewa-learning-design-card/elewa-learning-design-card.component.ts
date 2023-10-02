import { Component, Input } from '@angular/core';
import { LearningDesignCard } from '@elewa-website/models/schema/ui/cards';

@Component({
  selector: 'elewa-website-elewa-learning-design-card',
  templateUrl: './elewa-learning-design-card.component.html',
  styleUrls: ['./elewa-learning-design-card.component.scss'],
})
export class ElewaLearningDesignCardComponent {
  @Input() cardsData!: LearningDesignCard;
}
