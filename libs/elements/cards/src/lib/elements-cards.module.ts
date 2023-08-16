import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElewaProjectItemCardComponent } from './components/elewa-project-item-card/elewa-project-item-card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ElewaProjectItemCardComponent],
  exports: [ElewaProjectItemCardComponent]
})
export class ElementsCardsModule {}
