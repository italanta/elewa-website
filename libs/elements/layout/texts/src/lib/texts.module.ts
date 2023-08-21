import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElewaTextContentItemComponent } from './components/elewa-text-content-item/elewa-text-content-item.component';

import { TextsRoutesMoule } from './texts.routing';
import { ElewaTextSectionComponent } from './components/elewa-text-section/elewa-text-section.component';

@NgModule({
  imports: [CommonModule, TextsRoutesMoule],
  declarations: [ElewaTextContentItemComponent, ElewaTextSectionComponent],
})
export class TextsModule {}
