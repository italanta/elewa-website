import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './main/home/home-page.component';
import { AppHeaderModule } from '@elewa-website/elements/layout/header';

import { HomeRoutingModule } from './home.routing';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, AppHeaderModule],
  declarations: [HomePageComponent],
  exports: [HomePageComponent],
})
export class FeaturesPagesHomeModule {}
