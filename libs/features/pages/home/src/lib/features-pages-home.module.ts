import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsModule } from '@elewa-website/elements/cards';
import { MainPageModule } from '@elewa-website/elements/layout/pages/main-page';

import { HomePageComponent } from './main/home/home-page.component';
import { NewsSectionComponent } from './components/news-section/news-section.component';

import { HomeRoutingModule } from './home.routing';
import { ConsultancyPageModule } from '@elewa-website/features/pages/consultancy-page';

@NgModule({
  imports: [
    CommonModule, 
    HomeRoutingModule, 
    CardsModule, 
    MainPageModule, 
    
  ],
  declarations: [HomePageComponent, NewsSectionComponent],
  exports: [HomePageComponent],
})
export class FeaturesPagesHomeModule {}
