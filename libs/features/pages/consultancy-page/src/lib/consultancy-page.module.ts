import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultancyRoutingModule } from './consultancy.routing';

import { TextsModule } from '@elewa-website/elements/layout/texts';
import { ButtonsModule } from '@elewa-website/elements/layout/buttons';
import { AppHeaderModule } from '@elewa-website/elements/layout/header';

import { ConsultancyPageComponent } from './main/consultancy-page/consultancy-page.component';
import { ConsultancyHeroSectionComponent } from './components/consultancy-hero-section/consultancy-hero-section.component';

@NgModule({
  imports: [
    CommonModule, 
    ConsultancyRoutingModule,
    TextsModule,
    ButtonsModule,
    AppHeaderModule,
  ],
  declarations: [ ConsultancyPageComponent, ConsultancyHeroSectionComponent ],
  exports: [ ConsultancyHeroSectionComponent ]
})
export class ConsultancyPageModule {}
