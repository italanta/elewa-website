import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookletsPageComponent } from './main/booklets-page/booklets-page.component';

import { BookletsPageRoutingModule } from './booklets-page.routing';

@NgModule({
  imports: [CommonModule, BookletsPageRoutingModule],
  declarations: [BookletsPageComponent],
})
export class BookletsPageModule {}
