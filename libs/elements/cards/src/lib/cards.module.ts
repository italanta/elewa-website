import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonsModule } from '@elewa-website/elements/layout/buttons';

import { ElewaInfoCardComponent } from './elewa-info-card/elewa-info-card.component';
import { ElewaNewsCardComponent } from './elewa-news-card/elewa-news-card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ElewaInfoCardComponent, ElewaNewsCardComponent],
  exports: [ElewaInfoCardComponent,ElewaNewsCardComponent]
import { ElewaProjectItemCardComponent } from './elewa-project-item-card/elewa-project-item-card.component';
import { ElewaWebsitePriceItemCardComponent } from './elewa-price-item-card/elewa-website-price-item-card.component';

@NgModule({
  imports: [CommonModule, ButtonsModule],
  declarations: [ElewaInfoCardComponent, ElewaWebsitePriceItemCardComponent, ElewaProjectItemCardComponent],
  exports: [ElewaInfoCardComponent, ElewaWebsitePriceItemCardComponent, ElewaProjectItemCardComponent],
})
export class CardsModule {}
