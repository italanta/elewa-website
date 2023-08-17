import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCarouselComponent } from './project-carousel/project-carousel.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NextDirective } from './project-carousel/next.directive';
import { PrevDirective } from './project-carousel/prev.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [ProjectCarouselComponent, NextDirective, PrevDirective],
  exports: [ProjectCarouselComponent, NgImageSliderModule],
})
export class ElementsLayoutCarouselModule {}
