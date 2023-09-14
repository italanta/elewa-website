import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsModule } from '@elewa-website/elements/cards';
import { CarouselModule } from '@elewa-website/elements/layout/carousel';
import { MainPageModule } from '@elewa-website/elements/layout/pages/main-page';
import { BannersModule } from '@elewa-website/elements/banners';

import { ButtonsModule } from '@elewa-website/elements/layout/buttons';
import { AppHeaderModule } from '@elewa-website/elements/layout/header';
import { TextsModule } from '@elewa-website/elements/layout/texts';
import { ImagesModule } from '@elewa-website/elements/layout/images';

import { HomePageComponent } from './main/home/home-page.component';
import { NewsSectionComponent } from './components/news-section/news-section.component';
import { ProjectsSectionComponent } from './components/projects-section/projects-section.component';
import { HomeHeroSectionComponent } from './components/home-hero-section/home-hero-section.component';


import { HomeRoutingModule } from './home.routing';
import { OverviewSectionComponent } from './components/overview-section/overview-section.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    CardsModule,
    CarouselModule,
    MainPageModule,
    BannersModule,
    ButtonsModule,
    AppHeaderModule,
    TextsModule,
    ImagesModule
  ],
  declarations: [
    HomePageComponent,
    NewsSectionComponent,
    ProjectsSectionComponent,
    OverviewSectionComponent,
    HomeHeroSectionComponent
  ],
  exports: [ HomePageComponent, HomeHeroSectionComponent ],
})
export class FeaturesPagesHomeModule { }
