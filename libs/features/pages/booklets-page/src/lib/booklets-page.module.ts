import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookletsPageComponent } from './main/booklets-page/booklets-page.component';
import { BookletsRoutingModule } from './booklets.routing';
import { BookletsPageTextImageBannerSectionComponent } from './main/booklets-page-text-image-banner-section/booklets-page-text-image-banner-section.component';

@NgModule({
  imports: [CommonModule, BookletsRoutingModule, BookletsPageTextImageBannerSectionComponent],
  declarations: [BookletsPageComponent],
})
export class BookletsPageModule {}
