import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsCardsModule } from '@elewa-website/elements/cards';

import { HomePageComponent } from './main/home/home-page.component';

import { HomeRoutingModule } from './home.routing';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, ElementsCardsModule],
  declarations: [HomePageComponent],
  exports: [HomePageComponent],
})
export class FeaturesPagesHomeModule {}
