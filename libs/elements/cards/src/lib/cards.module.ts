import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElewaNewsItemCardComponent } from './elewa-news-item-card/elewa-news-item-card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ElewaNewsItemCardComponent],
  exports: [ElewaNewsItemCardComponent]
})
export class ElementsCardsModule {}