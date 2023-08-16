import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElewaTextSectionComponent } from './elewa-text-section/elewa-text-section.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ElewaTextSectionComponent],
  exports: [ElewaTextSectionComponent]
})
export class TextsModule {}
