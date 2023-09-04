import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonsModule } from '@elewa-website/elements/layout/buttons';
import { TextsModule } from '@elewa-website/elements/layout/texts';

import { BookletsPageComponent } from './main/booklets-page/booklets-page.component';
import { BookletsRoutingModule } from './booklets.routing';
import { BookletsHeroSectionComponent } from './components/booklets-hero-section/booklets-hero-section.component';

@NgModule({
  imports: [CommonModule, BookletsRoutingModule, TextsModule, ButtonsModule],
  declarations: [BookletsPageComponent, BookletsHeroSectionComponent],
})
export class BookletsPageModule {}
