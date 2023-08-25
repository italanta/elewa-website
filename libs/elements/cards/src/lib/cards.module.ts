import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonsModule } from '@elewa-website/elements/layout/buttons';

import { ElewaInfoCardComponent } from './elewa-info-card/elewa-info-card.component';
import { ElewaWebsitePriceItemCardComponent } from './elewa-website-price-item-card/elewa-website-price-item-card.component';
import { ElewaNewsItemCardComponent } from './elewa-news-item-card/elewa-news-item-card.component';

@NgModule({
  imports: [CommonModule, ButtonsModule],
  declarations: [ElewaInfoCardComponent, ElewaWebsitePriceItemCardComponent, ElewaNewsItemCardComponent],
  exports: [ElewaInfoCardComponent, ElewaWebsitePriceItemCardComponent, ElewaNewsItemCardComponent],
})
export class CardsModule {}
