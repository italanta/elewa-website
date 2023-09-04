import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImagesModule } from '@elewa-website/elements/layout/images';
import { TextsModule } from '@elewa-website/elements/layout/texts';

import { ElewaImageAndTextBannerComponent } from './components/elewa-image-and-text-banner/elewa-image-and-text-banner.component';

@NgModule({
  imports: [CommonModule, ImagesModule, TextsModule],
  declarations: [ElewaImageAndTextBannerComponent],
  exports:[ElewaImageAndTextBannerComponent]
})
export class BannersModule {}
