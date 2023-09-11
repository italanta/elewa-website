import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsModule } from '@elewa-website/elements/cards';
import { CarouselModule } from '@elewa-website/elements/layout/carousel';
import { MainPageModule } from '@elewa-website/elements/layout/pages/main-page';
import { BannersModule } from '@elewa-website/elements/banners';


import { HomePageComponent } from './main/home/home-page.component';
import { NewsSectionComponent } from './components/news-section/news-section.component';
import { ProjectsSectionComponent } from './components/projects-section/projects-section.component';

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
  ],
  declarations: [
    HomePageComponent,
    NewsSectionComponent,
    ProjectsSectionComponent,
    OverviewSectionComponent,
  ],
  exports: [HomePageComponent],
})
export class FeaturesPagesHomeModule {}
