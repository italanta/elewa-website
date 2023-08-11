import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElewaTextContentItemComponent } from './elewa-text-content-item/elewa-text-content-item.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ElewaTextContentItemComponent],
  //Exports the Component
  exports: [ElewaTextContentItemComponent]
})
export class ElementsLayoutTextsModule {}
