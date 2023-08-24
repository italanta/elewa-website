import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { NewsPageComponent } from './main/news-page/news-page.component';

export const ELEWA_NEWS_ROUTES: Route[] = [

  { path: '', component: NewsPageComponent },

];

@NgModule({
  imports: [RouterModule.forChild(ELEWA_NEWS_ROUTES)],
  exports: [RouterModule]
})
export class NewsPageRoutingModule { }
