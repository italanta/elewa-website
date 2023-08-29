import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './main/home/home-page.component';

import { HomeRoutingModule } from './home.routing';
//import the footer module 
import { ElementsLayoutFooterModule } from '@elewa-website/elements/layout/footer';
//import slider button module
import { ButtonsModule } from '@elewa-website/elements/layout/buttons';

@NgModule({
  imports: [CommonModule, HomeRoutingModule,ButtonsModule,ElementsLayoutFooterModule],
  declarations: [HomePageComponent],
  exports: [HomePageComponent],
})
export class FeaturesPagesHomeModule {}
