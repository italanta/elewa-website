import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElewaImageContainerComponent } from './components/elewa-image-container/elewa-image-container.component';

@NgModule({
  imports: [CommonModule],
  exports: [ElewaImageContainerComponent],
  declarations: [ElewaImageContainerComponent]
})
export class LayoutImagesModule {}
