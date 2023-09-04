import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElewaImageAndTextBannerComponent } from './elewa-image-and-text-banner/elewa-image-and-text-banner.component';
import { ImagesModule } from '@elewa-website/elements/layout/images';
import { TextsModule } from '@elewa-website/elements/layout/texts';

@NgModule({
  imports: [CommonModule, ImagesModule, TextsModule],
  declarations: [ElewaImageAndTextBannerComponent],
  exports: [ElewaImageAndTextBannerComponent]
})
export class BannersModule {}
