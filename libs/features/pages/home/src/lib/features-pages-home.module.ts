import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { CardsModule } from '@elewa-website/elements/cards';
import { AppHeaderModule } from '@elewa-website/elements/layout/header';

import { HomePageComponent } from './main/home/home-page.component';
import { NewsSectionComponent } from './components/news-section/news-section.component';


import { HomeRoutingModule } from './home.routing';
import { FeaturesBannersModule} from '../../../../banners/src/lib/features-banners.module'
import { ElewaImageAndTextBannerComponent } from 'libs/features/banners/src/lib/elewa-image-and-text-banner/elewa-image-and-text-banner.component';
@NgModule({

  imports: [CommonModule, HomeRoutingModule, CardsModule, AppHeaderModule],
  declarations: [HomePageComponent, NewsSectionComponent],

  exports: [HomePageComponent],
})
export class FeaturesPagesHomeModule {}
