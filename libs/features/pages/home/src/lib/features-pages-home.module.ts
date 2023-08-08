import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './main/home/home-page.component';

import { HomeRoutingModule } from './home.routing';
import { ElementsLayoutTextsModule } from '@elewa-website/elements/layout/texts';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, ElementsLayoutTextsModule],
  declarations: [HomePageComponent],
  exports: [HomePageComponent],
})
export class FeaturesPagesHomeModule {}
