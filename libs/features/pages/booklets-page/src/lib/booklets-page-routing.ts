import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { BookletsPageComponent } from './main/booklets-page/booklets-page.component';
export const ELEWA_HOME_ROUTES: Route[] = [

  { path: '', component: BookletsPageComponent },

];

@NgModule({
  imports: [RouterModule.forChild(ELEWA_HOME_ROUTES)],
  exports: [RouterModule]
})
export class BookletsPageModule { }
