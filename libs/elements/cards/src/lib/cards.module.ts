import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ElewaProjectItemCardComponent } from './elewa-project-item-card/elewa-project-item-card.component';

@NgModule({
  imports: [CommonModule, NgOptimizedImage],
  declarations: [ElewaProjectItemCardComponent],
  exports: [ElewaProjectItemCardComponent]
})
export class CardsModule {}
