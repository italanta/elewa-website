import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElewaSliderButtonComponent } from './elewa-slider-button/elewa-slider-button.component';

import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [CommonModule, MatIconModule ],
  declarations: [ElewaSliderButtonComponent],
  exports: [ElewaSliderButtonComponent]
})
export class ButtonsModule {}
