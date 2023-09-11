import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageModule } from '@elewa-website/elements/layout/pages/main-page';
import { AppHeaderModule } from '@elewa-website/elements/layout/header';
import { TextsModule } from '@elewa-website/elements/layout/texts';
import { BannersModule } from '@elewa-website/elements/banners';
import { CardsModule } from '@elewa-website/elements/cards';
import { ButtonsModule } from '@elewa-website/elements/layout/buttons';

import { ConsultancyPageComponent } from './main/consultancy-page/consultancy-page.component';
import { ConsultancyLearningServicesComponent } from './components/elewa-website-learning-services/consultancy-learning-services-section.component';
import { ConsultancyHeroSectionComponent } from './components/consultancy-hero-section/consultancy-hero-section.component';
import { ConsultancyAboutOneComponent } from './components/consultancy-about-one/consultancy-about-one.component';

import { ConsultancyRoutingModule } from './consultancy.routing';

@NgModule({
  imports: [
    CommonModule,
    ConsultancyRoutingModule,
    AppHeaderModule,
    TextsModule,
    ButtonsModule,
    BannersModule,
    CardsModule,
    MainPageModule,
  ],
  declarations: [
    ConsultancyPageComponent,
    ConsultancyHeroSectionComponent,
    ConsultancyAboutOneComponent,
    ConsultancyLearningServicesComponent,
  ],
  exports: [ConsultancyPageComponent],
})
export class ConsultancyPageModule {}
