import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElewaImageContainerComponent } from 'libs/elements/layout/images/src/lib/elewa-image-container/elewa-image-container.component';
import { HomePageComponent } from './main/home/home-page.component';
import {LayoutImagesModule} from '../../../../../elements/layout/images/src/lib/layout-images.module'
import { HomeRoutingModule } from './home.routing';

@NgModule({
  imports: [CommonModule, HomeRoutingModule],
  declarations: [HomePageComponent, ElewaImageContainerComponent],
  exports: [HomePageComponent],
})
export class FeaturesPagesHomeModule {}
