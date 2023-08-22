import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElewaTextSectionComponent } from './components/elewa-text-section/elewa-text-section.component';

import { TextsRoutesModule } from './text.routing';

@NgModule({
  imports: [CommonModule,TextsRoutesModule],
  declarations: [ElewaTextSectionComponent],
})
export class TextsModule {}
