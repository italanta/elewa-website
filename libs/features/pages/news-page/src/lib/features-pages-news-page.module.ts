import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsPageComponent } from './main/news-page/news-page.component';

import { NewsPageRoutingModule } from './news-page.routing';

@NgModule({
  imports: [CommonModule, NewsPageRoutingModule],
  declarations: [NewsPageComponent],
  exports: [NewsPageComponent],
})
export class NewsPageModule {}