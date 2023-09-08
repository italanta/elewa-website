import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsModule } from '@elewa-website/elements/cards';

import { ConsultancyRoutingModule } from './consultancy.routing';

import { ConsultancyPageComponent } from './main/consultancy-page/consultancy-page.component';
import { ElewaWebsiteLearningServicesComponent } from './Component/elewa-website-learning-services/elewa-website-learning-services.component';

@NgModule({
  imports: [CommonModule, ConsultancyRoutingModule, CardsModule],
  declarations: [
    ConsultancyPageComponent,
    ElewaWebsiteLearningServicesComponent,
  ],
})
export class ConsultancyPageModule {}
