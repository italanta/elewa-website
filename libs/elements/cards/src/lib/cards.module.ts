import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElewaInfoCardComponent } from './elewa-info-card/elewa-info-card.component';
import { ElewaWebsitePriceItemCardComponent } from './elewa-website-price-item-card/elewa-website-price-item-card.component';
import { ButtonsModule } from '@elewa-website/elements/layout/buttons';

@NgModule({
  imports: [CommonModule, ButtonsModule],
  declarations: [ElewaInfoCardComponent, ElewaWebsitePriceItemCardComponent],
  exports: [ElewaInfoCardComponent, ElewaWebsitePriceItemCardComponent],
})
export class CardsModule {}
