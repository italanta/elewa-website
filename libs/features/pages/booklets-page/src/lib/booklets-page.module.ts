import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookletsPageComponent } from './main/booklets-page/booklets-page.component';
import { BookletsPageRoutinModule } from './booklets-page.routing';

@NgModule({
  imports: [CommonModule, BookletsPageRoutinModule],
  declarations: [BookletsPageComponent],
})
export class BookletsPageModule {}
