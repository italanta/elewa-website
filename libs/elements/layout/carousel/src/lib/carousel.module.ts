import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsModule } from '@elewa-website/elements/cards';

import { CarouselComponent } from './components/carousel/carousel.component';
import { PrevDirective } from './directives/prev.directive';
import { NextDirective } from './directives/next.directive';

@NgModule({
  imports: [CommonModule, CardsModule],
  declarations: [CarouselComponent, NextDirective, PrevDirective],
  exports: [CarouselComponent],
})
export class CarouselModule {}
