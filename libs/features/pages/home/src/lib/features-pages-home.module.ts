import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageModule } from '@elewa-website/elements/layout/pages/main-page';

import { HomePageComponent } from './main/home/home-page.component';
import { NewsSectionComponent } from './components/news-section/news-section.component';
import { ProjectsSectionComponent } from './components/projects-section/projects-section.component';

import { HomeRoutingModule } from './home.routing';
import { CardsModule } from '@elewa-website/elements/cards';
import { CarouselModule } from '@elewa-website/elements/layout/carousel';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    CardsModule,
    MainPageModule,
    CarouselModule,
    MainPageModule,
  ],
  declarations: [
    HomePageComponent,
    NewsSectionComponent,
    ProjectsSectionComponent,
  ],
  exports: [HomePageComponent],
})
export class FeaturesPagesHomeModule {}
