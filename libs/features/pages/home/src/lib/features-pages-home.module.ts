import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsModule } from '@elewa-website/elements/cards';
import { CarouselModule } from '@elewa-website/elements/layout/carousel';
import { MainPageModule } from '@elewa-website/elements/layout/pages/main-page';
import { AppHeaderModule } from '@elewa-website/elements/layout/header';
import { TextsModule } from '@elewa-website/elements/layout/texts';
import { ButtonsModule } from '@elewa-website/elements/layout/buttons';

import { HomePageComponent } from './main/home/home-page.component';
import { NewsSectionComponent } from './components/news-section/news-section.component';
import { ProjectsSectionComponent } from './components/projects-section/projects-section.component';
import { HomeHeroSectionComponent } from './components/home-hero-section/home-hero-section.component';

import { HomeRoutingModule } from './home.routing';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    CardsModule,
    CarouselModule,
    MainPageModule,
    TextsModule,
    AppHeaderModule, 
    ButtonsModule
  ],
  declarations: [
    HomePageComponent,
    NewsSectionComponent,
    ProjectsSectionComponent,
    HomeHeroSectionComponent
  ],
  exports: [HomePageComponent],
})
export class FeaturesPagesHomeModule {}
