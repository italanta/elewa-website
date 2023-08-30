import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './main/home/home-page.component';
import { HomeRoutingModule } from './home.routing';
import { ElewaImageAndTextBannerComponent } from 'libs/features/banners/src/lib/elewa-image-and-text-banner/elewa-image-and-text-banner.component';
@NgModule({
  imports: [CommonModule, HomeRoutingModule],
  declarations: [ElewaImageAndTextBannerComponent, HomePageComponent ],
  exports: [HomePageComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], 
})
export class FeaturesPagesHomeModule {}
