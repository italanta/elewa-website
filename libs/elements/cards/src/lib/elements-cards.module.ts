import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElewaInfoCardComponent } from './elewa-info-card/elewa-info-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [CommonModule, FontAwesomeModule],
  declarations: [ElewaInfoCardComponent],
  exports: [ElewaInfoCardComponent],
})
export class ElementsCardsModule {}
