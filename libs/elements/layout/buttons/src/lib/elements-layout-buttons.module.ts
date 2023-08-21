// src/app/modules/buttons/buttons.module.ts

import { NgModule } from '@angular/core';
import { ElewaNormalButtonComponent } from './elewa-normal-button/elewa-normal-button.component';

@NgModule({
  declarations: [ElewaNormalButtonComponent],
  exports: [ElewaNormalButtonComponent],
})
export class ButtonsModule {}
