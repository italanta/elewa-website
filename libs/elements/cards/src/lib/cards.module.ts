import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElewaInfoCardComponent } from './elewa-info-card/elewa-info-card.component';
import { ElewaNewsCardComponent } from './elewa-news-card/elewa-news-card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ElewaInfoCardComponent, ElewaNewsCardComponent],
  exports: [ElewaInfoCardComponent,ElewaNewsCardComponent]
})
export class CardsModule {}
