import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElewaInfoCardComponent } from './components/elewa-info-card/elewa-info-card.component';

import { CardsRoutesModule } from './cards.routing';

@NgModule({
  imports: [CommonModule, CardsRoutesModule],
  declarations: [ElewaInfoCardComponent]
})
export class CardsModule {}
