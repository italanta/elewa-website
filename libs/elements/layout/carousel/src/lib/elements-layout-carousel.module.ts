import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsModule } from '@elewa-website/elements/cards';

import { ProjectCarouselComponent } from './components/project-carousel/project-carousel.component';
import { PrevDirective } from './directives/prev.directive';
import { NextDirective } from './directives/next.directive';

@NgModule({
  imports: [CommonModule, CardsModule],
  declarations: [ProjectCarouselComponent, NextDirective, PrevDirective],
  exports: [ProjectCarouselComponent, ],
})
export class ElementsLayoutCarouselModule {}
