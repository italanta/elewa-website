import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './main/home/home-page.component';
import {ElementsCardsModule} from '@elewa-website/elements/cards'
import { HomeRoutingModule } from './home.routing';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, ElementsCardsModule],
  declarations: [HomePageComponent],
  exports: [HomePageComponent,],
})
export class FeaturesPagesHomeModule {}
