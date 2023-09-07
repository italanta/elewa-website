import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextsModule } from '@elewa-website/elements/layout/texts';
import { AppHeaderModule } from '@elewa-website/elements/layout/header';
import { ButtonsModule } from '@elewa-website/elements/layout/buttons';

import { ConsultancyRoutingModule } from './consultancy.routing';

import { ConsultancyPageComponent } from './main/consultancy-page/consultancy-page.component';
import { ConsultancyHeroSectionComponent } from './consultancy-hero-section/consultancy-hero-section.component';

@NgModule({
  imports: [
    CommonModule,
    ConsultancyRoutingModule,
    TextsModule,
    AppHeaderModule,
    ButtonsModule,
  ] /**  import modules */,
  declarations: [ConsultancyPageComponent, ConsultancyHeroSectionComponent],
})
export class ConsultancyPageModule {}
