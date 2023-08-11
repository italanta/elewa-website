import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './main/home/home-page.component';

import { HomeRoutingModule } from './home.routing';
import { ElewaTextContentItemComponent } from './elewa-text-content-item/elewa-text-content-item.component';

@NgModule({
  imports: [CommonModule, HomeRoutingModule],
  declarations: [HomePageComponent, ElewaTextContentItemComponent],
  exports: [HomePageComponent],
})
export class FeaturesPagesHomeModule {}
