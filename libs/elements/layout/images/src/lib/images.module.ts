import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElewaImageContainerComponent } from './components/elewa-image-container/elewa-image-container.component';
import { StackedSvgComponentComponent } from './components/stacked-svg-component/stacked-svg-component.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ElewaImageContainerComponent, StackedSvgComponentComponent],
  exports: [ElewaImageContainerComponent],
})
export class ImagesModule {}
