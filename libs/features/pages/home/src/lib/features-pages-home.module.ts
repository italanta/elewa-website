import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsModule } from '@elewa-website/elements/cards';
import { AppHeaderModule } from '@elewa-website/elements/layout/header';

import { HomePageComponent } from './main/home/home-page.component';
import { NewsSectionComponent } from './components/news-section/news-section.component';

import { HomeRoutingModule } from './home.routing';
import { ElementsLayoutFooterModule } from '@elewa-website/elements/layout/footer';
import { ButtonsModule } from '@elewa-website/elements/layout/buttons';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, CardsModule, AppHeaderModule, ElementsLayoutFooterModule, ButtonsModule],
  declarations: [HomePageComponent, NewsSectionComponent],
  exports: [HomePageComponent],
})
export class FeaturesPagesHomeModule {}
