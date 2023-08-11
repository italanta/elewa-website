import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './main/home/home-page.component';

import { HomeRoutingModule } from './home.routing';
import { PartnersSectionComponent } from './components/partners-section/partners-section.component';

@NgModule({
  imports: [CommonModule, HomeRoutingModule],
  declarations: [HomePageComponent, PartnersSectionComponent],
  exports: [HomePageComponent],
})
export class FeaturesPagesHomeModule {}
