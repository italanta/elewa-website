import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselListComponent } from './components/carousel-list/carousel-list.component';
import { ElewaProjectItemCardComponent } from 'libs/elements/cards/src/lib/elewa-project-item-card/elewa-project-item-card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CarouselListComponent, ElewaProjectItemCardComponent],
  exports: [CarouselListComponent]
})
export class ElementsCarouselModule {}
