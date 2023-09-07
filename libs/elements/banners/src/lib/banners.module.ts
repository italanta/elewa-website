import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsModule } from '@elewa-website/elements/cards';
import { ImagesModule } from '@elewa-website/elements/layout/images';
import { TextsModule } from '@elewa-website/elements/layout/texts';

import { ElewaImageAndDetailsBannerComponent } from './components/elewa-image-and-details-banner/elewa-image-and-details-banner.component';
import { ElewaImageAndTextBannerComponent } from './components/elewa-image-and-text-banner/elewa-image-and-text-banner.component';

@NgModule({
  imports: [CommonModule, ImagesModule, TextsModule, CardsModule],
  declarations: [
    ElewaImageAndTextBannerComponent,
    ElewaImageAndDetailsBannerComponent,
  ],
  exports: [
    ElewaImageAndTextBannerComponent,
    ElewaImageAndDetailsBannerComponent,
  ],
})
export class BannersModule {}
