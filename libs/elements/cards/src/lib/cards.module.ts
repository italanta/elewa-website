import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonsModule } from '@elewa-website/elements/layout/buttons';

import { ElewaInfoCardComponent } from './elewa-info-card/elewa-info-card.component';
import { ElewaWebsitePriceItemCardComponent } from './elewa-website-price-item-card/elewa-website-price-item-card.component';
import { ElewaProjectItemCardComponent } from './elewa-project-item-card/elewa-project-item-card.component';

@NgModule({
  imports: [CommonModule, ButtonsModule],
  declarations: [
    ElewaInfoCardComponent,
    ElewaWebsitePriceItemCardComponent,
    ElewaProjectItemCardComponent,
  ],
  exports: [ElewaInfoCardComponent, ElewaWebsitePriceItemCardComponent],
})
export class CardsModule {}
