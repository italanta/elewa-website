import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageModule } from '@elewa-website/elements/layout/pages/main-page';
import { AppHeaderModule } from '@elewa-website/elements/layout/header';
import { TextsModule } from '@elewa-website/elements/layout/texts';
import { CardsModule } from '@elewa-website/elements/cards';
import { ButtonsModule } from '@elewa-website/elements/layout/buttons';
import { BannersModule } from '@elewa-website/elements/banners';

import { ConsultancyPageComponent } from './main/consultancy-page/consultancy-page.component';
import { ConsultancyLearningServicesComponent } from './components/consultancy-learning-services-section/consultancy-learning-services-section.component';
import { ConsultancyHeroSectionComponent } from './components/consultancy-hero-section/consultancy-hero-section.component';
import { ConsultancyAboutOneComponent } from './components/consultancy-about-one/consultancy-about-one.component';

import { ConsultancyRoutingModule } from './consultancy.routing';
import { ElewaConsultancyAboutTwoComponent } from './components/elewa-consultancy-about-two/elewa-consultancy-about-two.component';

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

    BannersModule,
  ],
  declarations: [
    ConsultancyPageComponent,

    ConsultancyHeroSectionComponent,
    ConsultancyAboutOneComponent,
    ConsultancyLearningServicesComponent,
    ElewaConsultancyAboutTwoComponent,
  ],
  exports: [ ConsultancyPageComponent, ElewaConsultancyAboutTwoComponent ],,
})
export class ConsultancyPageModule { }
