import { Component, Input, OnInit } from '@angular/core';
import { InfoCard } from '@elewa-website/models/schema/ui/cards';
import { __highlightedServices as cardsData } from '@elewa-website/models/data/sections';

@Component({
  selector: 'elewa-website-learning-services',
  templateUrl: './elewa-website-learning-services.component.html',
  styleUrls: ['./elewa-website-learning-services.component.scss']
})
export class ElewaWebsiteLearningServicesComponent implements OnInit {
  @Input() cardsData!: InfoCard[];

  ngOnInit() {
    this.cardsData = cardsData;
  }

 

}
