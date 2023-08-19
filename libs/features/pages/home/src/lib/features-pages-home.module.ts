import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './main/home/home-page.component';

import { HomeRoutingModule } from './home.routing';
import { ButtonsModule } from '@elewa-website/elements/layout/buttons';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, ButtonsModule],
  declarations: [HomePageComponent],
  exports: [HomePageComponent],
})
export class FeaturesPagesHomeModule {}
