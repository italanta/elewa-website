import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookletsPageComponent } from './main/booklets-page/booklets-page.component';
import { BookletsRoutingModule } from './booklets.routing';

@NgModule({
  imports: [CommonModule, BookletsRoutingModule],
  declarations: [BookletsPageComponent],
})
export class BookletsPageModule {}
