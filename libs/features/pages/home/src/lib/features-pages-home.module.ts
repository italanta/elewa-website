import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './main/home/home-page.component';
import { HomeRoutingModule } from './home.routing';
import { FeaturesBannersModule} from '../../../../banners/src/lib/features-banners.module'
import { ElewaImageAndTextBannerComponent } from 'libs/features/banners/src/lib/elewa-image-and-text-banner/elewa-image-and-text-banner.component';
@NgModule({
  imports: [CommonModule, HomeRoutingModule],
  declarations: [HomePageComponent, ElewaImageAndTextBannerComponent],
  exports: [HomePageComponent],
})
export class FeaturesPagesHomeModule {}
