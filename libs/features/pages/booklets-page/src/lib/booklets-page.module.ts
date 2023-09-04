import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookletsPageComponent } from './main/booklets-page/booklets-page.component';
import { BookletsHeroSectionComponent } from './components/booklets-hero-section/booklets-hero-section.component';
import { AppHeaderModule } from '@elewa-website/elements/layout/header';
import { BookletsRoutingModule } from './booklets.routing';

@NgModule({
  imports: [CommonModule, BookletsRoutingModule, AppHeaderModule],
  declarations: [BookletsPageComponent, BookletsHeroSectionComponent],
})
export class BookletsPageModule {}
