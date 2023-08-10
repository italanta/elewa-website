import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { NewsSectionComponent } from './components/news-section/news-section.component';
import { HomePageComponent } from './main/home/home-page.component';
import { HomeRoutingModule } from './home.routing';

@NgModule({
  imports: [CommonModule, HomeRoutingModule],
  declarations: [HomeComponent, NewsSectionComponent, HomePageComponent],
  exports: [HomeComponent],

})
export class FeaturesPagesHomeModule {}
