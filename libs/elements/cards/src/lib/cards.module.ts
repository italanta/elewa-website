import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElewaNewsItemCardComponent } from './components/elewa-news-item-card/elewa-news-item-card.component';

import { CardsRoutesModule } from './cards.routing';

@NgModule({
  imports: [CommonModule, CardsRoutesModule],
  declarations: [ElewaNewsItemCardComponent]
})
export class CardsModule {}
