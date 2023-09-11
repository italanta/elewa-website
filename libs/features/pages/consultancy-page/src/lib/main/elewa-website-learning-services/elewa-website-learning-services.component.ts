import { Component } from '@angular/core';
import { InfoCard } from '@elewa-website/models/schema/ui/cards';
import { _learningServices } from '@elewa-website/data/sections';

@Component({
  selector: 'elewa-website-elewa-website-learning-services',
  templateUrl: './elewa-website-learning-services.component.html',
  styleUrls: ['./elewa-website-learning-services.component.scss'],
})
export class ElewaWebsiteLearningServicesComponent {
  

  /* an input object with the type InfoCard. **/
  cardsData : InfoCard[]= _learningServices
}

