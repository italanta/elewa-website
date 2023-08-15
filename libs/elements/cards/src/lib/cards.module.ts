import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { ElewaInfoCardComponent } from './components/elewa-info-card/elewa-info-card.component';

const MaterialComponents = [
  MatIconModule
];

@NgModule({
  imports: [CommonModule, MaterialComponents],
  declarations: [ElewaInfoCardComponent],
})
export class CardsModule {}
