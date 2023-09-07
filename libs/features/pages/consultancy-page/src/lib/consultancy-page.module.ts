import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultancyRoutingModule } from './consultancy.routing';

import { ConsultancyPageComponent } from './main/consultancy-page/consultancy-page.component';
import { ElewaWebsiteLearningServicesComponent } from './main/elewa-website-learning-services/elewa-website-learning-services.component';

@NgModule({
  imports: [CommonModule, ConsultancyRoutingModule],
  declarations: [
    ConsultancyPageComponent,
    ElewaWebsiteLearningServicesComponent,
  ],
})
export class ConsultancyPageModule {}
