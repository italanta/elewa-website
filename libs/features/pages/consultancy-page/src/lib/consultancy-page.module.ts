import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultancyRoutingModule } from './consultancy.routing';

import { ConsultancyPageComponent } from './main/consultancy-page/consultancy-page.component';
import { ElewaWebsiteLearningServicesComponent } from './components/elewa-website-learning-services/elewa-website-learning-services.component';
import { CardsModule } from '@elewa-website/elements/cards';

@NgModule({
  imports: [CommonModule, ConsultancyRoutingModule,CardsModule],
  declarations: [ConsultancyPageComponent, ElewaWebsiteLearningServicesComponent],
})
export class ConsultancyPageModule {}
