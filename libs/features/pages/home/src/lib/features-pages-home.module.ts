import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsModule } from '@elewa-website/elements/cards';
import { AppHeaderModule } from '@elewa-website/elements/layout/header';
import { AppFooterModule } from '@elewa-website/elements/layout/footer';

import { HomePageComponent } from './main/home/home-page.component';
import { NewsSectionComponent } from './components/news-section/news-section.component';

import { HomeRoutingModule } from './home.routing';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, CardsModule, AppHeaderModule, AppFooterModule],
  declarations: [HomePageComponent, NewsSectionComponent],
  exports: [HomePageComponent],
})
export class FeaturesPagesHomeModule {}
