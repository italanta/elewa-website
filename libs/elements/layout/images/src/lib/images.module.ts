import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageContainerComponent } from './components/image-container/image-container.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ImageContainerComponent],
  exports: [ImageContainerComponent]
})
export class ImagesModule {}
