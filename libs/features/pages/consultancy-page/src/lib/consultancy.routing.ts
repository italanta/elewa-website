import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { ConsultancyPageComponent } from './main/consultancy-page/consultancy-page.component';

export const ELEWA_CONSULTANCY_ROUTES: Route[] = [

  { path: '', component: ConsultancyPageComponent },

];

@NgModule({
  imports: [RouterModule.forChild(ELEWA_CONSULTANCY_ROUTES)],
  exports: [RouterModule]
})
export class ConsultancyRoutingModule { }
