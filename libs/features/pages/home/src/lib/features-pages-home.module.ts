import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './main/home/home-page.component';

import { HomeRoutingModule } from './home.routing';
import { ElementsCardsModule } from '@elewa-website/elements/cards';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, ElementsCardsModule],
  declarations: [HomePageComponent],
  exports: [HomePageComponent],
})
export class FeaturesPagesHomeModule {}
