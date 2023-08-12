import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElewaTextContentItemComponent } from './components/elewa-text-content-item/elewa-text-content-item.component';

import { TextsRoutesMoule } from './texts.routing';

@NgModule({
  imports: [CommonModule, TextsRoutesMoule],
  declarations: [ElewaTextContentItemComponent]
})
export class TextsModule {}
