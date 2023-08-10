import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { HomePageComponent } from './main/home/home-page.component';

export const ELEWA_HOME_ROUTES: Route[] = [

  { path: '', component: HomePageComponent },

];

@NgModule({
  imports: [RouterModule.forChild(ELEWA_HOME_ROUTES)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
