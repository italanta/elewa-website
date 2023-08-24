import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookletsRoutingModule } from './booklets.routing';

import { BookletsPageComponent } from './main/booklets-page/booklets-page.component';

@NgModule({
  imports: [CommonModule, BookletsRoutingModule],
  declarations: [BookletsPageComponent],
})
export class BookletsPageModule {}
