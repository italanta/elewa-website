import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NormalButtonComponent } from './NormalButton/normal-button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [NormalButtonComponent],
  exports: [NormalButtonComponent],
})
export class ElementsLayoutButtonsModule {}
