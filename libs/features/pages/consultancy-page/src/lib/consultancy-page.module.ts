import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppHeaderModule } from '@elewa-website/elements/layout/header';
import { TextsModule } from '@elewa-website/elements/layout/texts';
import { BannersModule } from '@elewa-website/elements/banners';
import { ButtonsModule } from '@elewa-website/elements/layout/buttons';

import { ConsultancyPageComponent } from './main/consultancy-page/consultancy-page.component';
import { ConsultancyHeroSectionComponent } from './components/consultancy-hero-section/consultancy-hero-section.component';
import { ConsultancyAboutOneComponent } from './elewa-consultancy-about-one/elewa-consultancy-about-one.component';

import { ConsultancyRoutingModule } from './consultancy.routing';

@NgModule({
  imports: [
    CommonModule,
    ConsultancyRoutingModule,
    AppHeaderModule,
    TextsModule,
    ButtonsModule,
    BannersModule,
  ],
  declarations: [
    ConsultancyPageComponent,
    ConsultancyHeroSectionComponent,
    ConsultancyAboutOneComponent,
  ],
  exports: [ConsultancyPageComponent],
})
export class ConsultancyPageModule {}
