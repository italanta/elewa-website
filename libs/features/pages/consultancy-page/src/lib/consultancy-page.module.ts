import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultancyRoutingModule } from './consultancy.routing';

import { ConsultancyPageComponent } from './main/consultancy-page/consultancy-page.component';
import { ConsultancyHeroSectionComponent } from './components/consultancy-hero-section/consultancy-hero-section.component';
import { ButtonsModule } from '@elewa-website/elements/layout/buttons';
import { AppHeaderModule } from '@elewa-website/elements/layout/header';

@NgModule({
  imports: [CommonModule, ConsultancyRoutingModule, ButtonsModule, AppHeaderModule],
  declarations: [ConsultancyPageComponent, ConsultancyHeroSectionComponent],
  exports: [ConsultancyHeroSectionComponent]
})
export class ConsultancyPageModule {}
