import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './main/home/home-page.component';

import { HomeRoutingModule } from './home.routing';
//import the footer module 
import { ElementsLayoutFooterModule } from '@elewa-website/elements/layout/footer';


@NgModule({
  imports: [CommonModule, HomeRoutingModule,ElementsLayoutFooterModule],
  declarations: [HomePageComponent],
  exports: [HomePageComponent],
})
export class FeaturesPagesHomeModule {}
