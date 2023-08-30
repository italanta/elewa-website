import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookletsPageComponent } from './main/booklets-page/booklets-page.component';
import { BookletsRoutingModule } from './booklets.routing';
import { CardsModule } from '@elewa-website/elements/cards';
@NgModule({
  imports: [CommonModule, BookletsRoutingModule,CardsModule],
  declarations: [BookletsPageComponent],
})
export class BookletsPageModule {}
