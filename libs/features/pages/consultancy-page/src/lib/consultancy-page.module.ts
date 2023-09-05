import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultancyRoutingModule } from './consultancy.routing';

import { ConsultancyPageComponent } from './main/consultancy-page/consultancy-page.component';
import { ConsultancyHeroSectionComponent } from './consultancy-hero-section/consultancy-hero-section.component';

@NgModule({
  imports: [CommonModule, ConsultancyRoutingModule],
  declarations: [ConsultancyPageComponent, ConsultancyHeroSectionComponent],
})
export class ConsultancyPageModule {}
