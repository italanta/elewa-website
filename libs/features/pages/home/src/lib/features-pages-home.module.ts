import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './main/home/home-page.component';

import { HomeRoutingModule } from './home.routing';
import { NewsSectionComponent } from './components/news-section/news-section.component';

@NgModule({
  imports: [CommonModule, HomeRoutingModule],
  declarations: [HomePageComponent, NewsSectionComponent],
  exports: [HomePageComponent],
})
export class FeaturesPagesHomeModule {}
