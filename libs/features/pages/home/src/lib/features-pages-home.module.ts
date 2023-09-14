import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageModule } from '@elewa-website/elements/layout/pages/main-page';
import { CardsModule } from '@elewa-website/elements/cards';
import { HomeRoutingModule } from './home.routing';
import { HomePageComponent } from './main/home/home-page.component';
import { NewsSectionComponent } from './components/news-section/news-section.component';
import { ProjectsSectionComponent } from './components/projects-section/projects-section.component';
import { CarouselModule } from '@elewa-website/elements/layout/carousel';
import { ConsultancyPageModule } from '@elewa-website/features/pages/consultancy-page';
import { EducationSectionComponent } from './components/education-section/education-section.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    CardsModule,
    MainPageModule,
    CarouselModule,
    ConsultancyPageModule,
  ],
  declarations: [
    HomePageComponent,
    NewsSectionComponent,
    ProjectsSectionComponent,
    EducationSectionComponent,
  ],
  exports: [HomePageComponent],
})
export class FeaturesPagesHomeModule {}
