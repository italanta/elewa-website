import { CommonModule } from '@angular/common';

import { AppHeaderModule } from '@elewa-website/elements/layout/header';
import { TextsModule } from '@elewa-website/elements/layout/texts';
import { ButtonsModule } from '@elewa-website/elements/layout/buttons';

import { ConsultancyRoutingModule } from './consultancy.routing';

import { ConsultancyPageComponent } from './main/consultancy-page/consultancy-page.component';
import { ConsultancyHeroSectionComponent } from './components/consultancy-hero-section/consultancy-hero-section.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule, ConsultancyRoutingModule, AppHeaderModule, TextsModule, ButtonsModule],
  declarations: [ConsultancyPageComponent, ConsultancyHeroSectionComponent],
  exports: [ConsultancyPageComponent]
})
export class ConsultancyPageModule {}
