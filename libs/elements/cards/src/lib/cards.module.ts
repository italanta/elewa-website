import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElewaInfoCardComponent } from './elewa-info-card/elewa-info-card.component';
import { ElewaProjectItemCardComponent } from './elewa-project-item-card/elewa-project-item-card.component';
@NgModule({
  imports: [CommonModule],
  declarations: [
    ElewaInfoCardComponent,
    ElewaProjectItemCardComponent,
  ],
  exports: [ElewaInfoCardComponent, ElewaProjectItemCardComponent],
})
export class CardsModule {}
