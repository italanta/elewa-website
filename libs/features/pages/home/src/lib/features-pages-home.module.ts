import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsModule } from '@elewa-website/elements/cards';
import { AppHeaderModule } from '@elewa-website/elements/layout/header';

import { HomePageComponent } from './main/home/home-page.component';
import { NewsSectionComponent } from './components/news-section/news-section.component';

import { HomeRoutingModule } from './home.routing';
//import the footer module
import { ElementsLayoutFooterModule } from '@elewa-website/elements/layout/footer';
//import slider button module
import { ButtonsModule } from '@elewa-website/elements/layout/buttons';
import { HomeHeroSectionComponent } from './components/home-hero-section/home-hero-section.component';
import { TextsModule } from '@elewa-website/elements/layout/texts';
import { ImagesModule } from '@elewa-website/elements/layout/images';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    CardsModule,
    AppHeaderModule,
    ButtonsModule,
    ElementsLayoutFooterModule,
    TextsModule,
    ImagesModule
  ],
  declarations: [
    HomePageComponent,
    NewsSectionComponent,
    HomeHeroSectionComponent,
  ],
  exports: [HomePageComponent],
})
export class FeaturesPagesHomeModule {}
