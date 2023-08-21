import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SliderButtonComponent } from './components/elewa-slider-button/elewa-slider-button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SliderButtonComponent],
  exports: [SliderButtonComponent],
})
export class ButtonsModule {}

