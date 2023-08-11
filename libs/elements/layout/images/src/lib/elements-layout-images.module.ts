import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElewaImageContainerRoutingModule } from './elewa-image-container.routing';
import { ElewaImageContainerComponent } from './components/elewa-image-container/elewa-image-container.component';

@NgModule({
  imports: [CommonModule, ElewaImageContainerRoutingModule],
  declarations: [ElewaImageContainerComponent],
  
  // Export image container component
  exports: [ElewaImageContainerComponent],
})
export class ElementsLayoutImagesModule {}
