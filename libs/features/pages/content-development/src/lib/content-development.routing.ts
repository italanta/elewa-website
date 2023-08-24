import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { ContentDevelopmentPageComponent } from './main/content-development-page/content-development-page.component';

export const ELEWA_CONTENT_DEVELOPMENT_ROUTES: Route[] = [

  { path: '', component: ContentDevelopmentPageComponent },

];

@NgModule({
  imports: [RouterModule.forChild(ELEWA_CONTENT_DEVELOPMENT_ROUTES)],
  exports: [RouterModule]
})
export class ContentDevelopmentPageRoutingModule { }
