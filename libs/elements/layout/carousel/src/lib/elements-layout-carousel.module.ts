import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCarouselComponent } from './components/project-carousel/project-carousel.component';
import { PrevDirective } from './directives/prev.directive';
import { NextDirective } from './directives/next.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [ProjectCarouselComponent, NextDirective, PrevDirective],
  exports: [ProjectCarouselComponent, ],
})
export class ElementsLayoutCarouselModule {}
