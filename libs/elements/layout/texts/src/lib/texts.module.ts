import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElewaTextSectionComponent } from './components/elewa-text-section/elewa-text-section.component';
import { ElewaTextContentItemComponent } from './components/elewa-text-content-item/elewa-text-content-item.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ElewaTextContentItemComponent, ElewaTextSectionComponent],
  exports: [ElewaTextSectionComponent]
})
export class TextsModule {}
