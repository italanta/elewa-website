import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { AboutPageComponent } from './main/about-page/about-page.component';

export const ELEWA_ABOUT_ROUTES: Route[] = [

  { path: '', component: AboutPageComponent },

];

@NgModule({
  imports: [RouterModule.forChild(ELEWA_ABOUT_ROUTES)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
