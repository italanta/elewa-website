import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElewaImageContainerComponent } from 'libs/elements/layout/images/src/lib/elewa-image-container/elewa-image-container.component';
import { HomePageComponent } from './main/home/home-page.component';
import {LayoutImagesModule} from '../../../../../elements/layout/images/src/lib/layout-images.module'
import { HomeRoutingModule } from './home.routing';
import { ElewaImageAndTextBannerComponent } from 'libs/features/banners/src/lib/elewa-image-and-text-banner/elewa-image-and-text-banner.component';
@NgModule({
  imports: [CommonModule, HomeRoutingModule],
  declarations: [HomePageComponent,ElewaImageAndTextBannerComponent ],
  exports: [HomePageComponent],
})
export class FeaturesPagesHomeModule {}
