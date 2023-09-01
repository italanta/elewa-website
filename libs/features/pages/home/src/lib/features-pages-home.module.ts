import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsModule } from '@elewa-website/elements/cards';
import { AppHeaderModule } from '@elewa-website/elements/layout/header';

import { HomePageComponent } from './main/home/home-page.component';
import { NewsSectionComponent } from './components/news-section/news-section.component';

import { HomeRoutingModule } from './home.routing';
import { ElementsLayoutImagesModule } from '@elewa-website/elements/layout/images';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, CardsModule, AppHeaderModule, ElementsLayoutImagesModule],
  declarations: [HomePageComponent, NewsSectionComponent],
  exports: [HomePageComponent],
})
export class FeaturesPagesHomeModule {}
