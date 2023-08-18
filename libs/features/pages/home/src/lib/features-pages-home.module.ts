import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './main/home/home-page.component';

import { HomeRoutingModule } from './home.routing';
import { ElementsLayoutCarouselModule } from '@elewa-website/elements/layout/carousel';

@NgModule({
  imports: [CommonModule, HomeRoutingModule],
  declarations: [HomePageComponent],
  exports: [HomePageComponent],
})
export class FeaturesPagesHomeModule {}
