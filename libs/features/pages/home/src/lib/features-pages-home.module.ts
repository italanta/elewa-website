import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsModule } from '@elewa-website/elements/cards';

import { HomePageComponent } from './main/home/home-page.component';
import { NewsSectionComponent } from './components/news-section/news-section.component';

import { HomeRoutingModule } from './home.routing';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, CardsModule],
  declarations: [HomePageComponent, NewsSectionComponent],
  exports: [HomePageComponent],
})
export class FeaturesPagesHomeModule {}
