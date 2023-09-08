import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsModule } from '@elewa-website/elements/cards';
import { HomeRoutingModule } from './home.routing';
import { MainPageModule } from '@elewa-website/elements/layout/pages/main-page';
import { HomePageComponent } from './main/home/home-page.component';
import { NewsSectionComponent } from './components/news-section/news-section.component';

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
