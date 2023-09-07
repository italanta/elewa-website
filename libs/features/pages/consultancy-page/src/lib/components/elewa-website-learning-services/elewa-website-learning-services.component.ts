import { Component, Input } from '@angular/core';

import { InfoCard } from '@elewa-website/models/schema/ui/cards';

@Component({
  selector: 'elewa-website-elewa-website-learning-services',
  templateUrl: './elewa-website-learning-services.component.html',
  styleUrls: ['./elewa-website-learning-services.component.scss'],
})
export class ElewaWebsiteLearningServicesComponent {
  @Input() cardsData: InfoCard[] = [];
}
