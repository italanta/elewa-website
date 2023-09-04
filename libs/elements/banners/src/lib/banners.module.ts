import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImagesModule } from '@elewa-website/elements/layout/images';
import { CardsModule } from '@elewa-website/elements/cards';

import { ElewaImageAndDetailsBannerComponent } from './components/elewa-image-and-details-banner/elewa-image-and-details-banner.component';

@NgModule({
  imports: [CommonModule, ImagesModule, CardsModule],
  declarations: [ElewaImageAndDetailsBannerComponent],
  exports: [ElewaImageAndDetailsBannerComponent]
})
export class BannersModule {}
