import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElewaImageContainerComponent } from './components/elewa-image-container/elewa-image-container.component';

import { ImagesRoutesMoudule } from './images.routing';

@NgModule({
  imports: [CommonModule, ImagesRoutesMoudule],
  declarations: [ElewaImageContainerComponent]
})
export class ImagesModule {}
