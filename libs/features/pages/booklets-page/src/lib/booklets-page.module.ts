import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppHeaderModule } from '@elewa-website/elements/layout/header';
import { TextsModule } from '@elewa-website/elements/layout/texts';
import { ButtonsModule } from '@elewa-website/elements/layout/buttons';

import { BookletsPageComponent } from './main/booklets-page/booklets-page.component';
import { BookletsHeroSectionComponent } from './components/booklets-hero-section/booklets-hero-section.component';

import { BookletsRoutingModule } from './booklets.routing';

@NgModule({
  imports: [CommonModule, BookletsRoutingModule, AppHeaderModule, TextsModule, ButtonsModule],
  declarations: [BookletsPageComponent, BookletsHeroSectionComponent],
})
export class BookletsPageModule {}
