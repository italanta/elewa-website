import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElewaTextContentItemComponent } from './components/elewa-text-content-item/elewa-text-content-item.component';
import { ElewaTextSectionComponent } from './components/elewa-text-section/elewa-text-section.component';

import { TextsRoutesMoule } from './texts.routing';

@NgModule({
  imports: [CommonModule, TextsRoutesMoule],
  declarations: [ElewaTextSectionComponent, ElewaTextContentItemComponent]
})
export class TextsModule {}
