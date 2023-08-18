import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElewaNormalButtonComponent } from './components/elewa-normal-button/elewa-normal-button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ElewaNormalButtonComponent],
  exports:[ElewaNormalButtonComponent]
})
export class ButtonsModule {}
