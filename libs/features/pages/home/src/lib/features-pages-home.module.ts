import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { NewsSectionComponent } from './components/news-section/news-section.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HomeComponent, NewsSectionComponent],
  exports: [HomeComponent],
})
export class FeaturesPagesHomeModule {}
