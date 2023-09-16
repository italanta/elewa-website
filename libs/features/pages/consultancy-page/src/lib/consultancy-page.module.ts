import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageModule } from '@elewa-website/elements/layout/pages/main-page';
import { AppHeaderModule } from '@elewa-website/elements/layout/header';
import { TextsModule } from '@elewa-website/elements/layout/texts';
import { BannersModule } from '@elewa-website/elements/banners';
import { CardsModule } from '@elewa-website/elements/cards';
import { ButtonsModule } from '@elewa-website/elements/layout/buttons';

import { ConsultancyPageComponent } from './main/consultancy-page/consultancy-page.component';
import { ConsultancyHeroSectionComponent } from './components/consultancy-hero-section/consultancy-hero-section.component';
import { ConsultancyAboutOneComponent } from './components/consultancy-about-one/consultancy-about-one.component';
import { ConsultancyAboutTwoComponent } from './components/consultancy-about-two/consultancy-about-two.component';
import { ConsultancyLearningServicesComponent } from './components/consultancy-learning-services-section/consultancy-learning-services-section.component';

import { ConsultancyRoutingModule } from './consultancy.routing';
import { ConsultancyProjectsSectionComponent } from './components/consultancy-projects-section/consultancy-projects-section.component';

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
    ConsultancyAboutTwoComponent,
    ConsultancyLearningServicesComponent,
    ConsultancyProjectsSectionComponent,
  ],
  exports: [ConsultancyPageComponent],
})
export class ConsultancyPageModule {}
