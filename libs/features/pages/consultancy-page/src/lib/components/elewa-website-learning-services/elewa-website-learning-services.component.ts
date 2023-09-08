import { Component } from '@angular/core';

import { InfoCard } from '@elewa-website/models/schema/ui/cards';
import { __highlightedConsultancyItems } from '@elewa-website/data/sections';

@Component({
  selector: 'elewa-website-elewa-website-learning-services',
  templateUrl: './elewa-website-learning-services.component.html',
  styleUrls: ['./elewa-website-learning-services.component.scss'],
})
export class ElewaWebsiteLearningServicesComponent {
  cardsData: InfoCard[] = __highlightedConsultancyItems;
}
