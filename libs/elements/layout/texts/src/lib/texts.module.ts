import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElewaTextSectionComponent } from './components/elewa-text-section/elewa-text-section.component';
import { ElewaTextContentItemComponent } from './components/elewa-text-content-item/elewa-text-content-item.component';
import { AboutHeroSectionComponent } from './components/about-hero-section/about-hero-section.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ElewaTextContentItemComponent,
    ElewaTextSectionComponent,
    AboutHeroSectionComponent,
  ],
  exports: [ElewaTextSectionComponent],
})
export class TextsModule {}
