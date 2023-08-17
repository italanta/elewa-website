import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './main/home/home-page.component';

import { HomeRoutingModule } from './home.routing';
import { HomePageOverviewComponent } from './components/home_page_overview/home-page-overview.component';

@NgModule({
  imports: [CommonModule, HomeRoutingModule],
  declarations: [HomePageComponent, HomePageOverviewComponent],
  exports: [HomePageComponent],
})
export class FeaturesPagesHomeModule {}
