import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SliderButtonComponent } from './components/elewa-slider-button/elewa-slider-button.component';
import { ElewaNormalButtonComponent } from './components/elewa-normal-button/elewa-normal-button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SliderButtonComponent, ElewaNormalButtonComponent],
  exports: [SliderButtonComponent, ElewaNormalButtonComponent],
})
export class ButtonsModule {}
