import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './main/home/home-page.component';
import {FeaturesBannersModule } from '../../../../banners/src/lib/features-banners.module'
import { HomeRoutingModule } from './home.routing';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, FeaturesBannersModule],
  declarations: [HomePageComponent],
  exports: [HomePageComponent],
})
export class FeaturesPagesHomeModule {}
