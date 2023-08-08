import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './main/home/home-page.component';

import { HomeRoutingModule } from './home.routing';
import { InfoCardComponent } from './info-card/info-card.component';

@NgModule({
  imports: [CommonModule, HomeRoutingModule],
  declarations: [HomePageComponent, InfoCardComponent],
  exports: [HomePageComponent],
})
export class FeaturesPagesHomeModule {}
