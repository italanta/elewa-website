import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './main/home/home-page.component';

import { HomeRoutingModule } from './home.routing';
import {ElementsLayoutHeaderAppHeaderModule} from '@elewa-website/elements/layout/header/app-header-module'

@NgModule({
  imports: [CommonModule, HomeRoutingModule,ElementsLayoutHeaderAppHeaderModule],
  declarations: [HomePageComponent],
  exports: [HomePageComponent],
})
export class FeaturesPagesHomeModule {}
