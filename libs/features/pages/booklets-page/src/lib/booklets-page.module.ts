import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookletsPageComponent } from './main/booklets-page/booklets-page.component';
import { BookletsRoutingModule } from './booklets.routing';
import { BookletsHeroSectionComponent } from './components/booklets-hero-section/booklets-hero-section.component';

@NgModule({
  imports: [CommonModule, BookletsRoutingModule],
  declarations: [BookletsPageComponent, BookletsHeroSectionComponent],
})
export class BookletsPageModule {}
