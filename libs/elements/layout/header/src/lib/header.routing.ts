import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';

export const ELEWA_HOME_ROUTES: Route[] = [

  { path: '', component: HeaderComponent },

];

@NgModule({
  imports: [RouterModule.forChild(ELEWA_HOME_ROUTES)],
  exports: [RouterModule]
})
export class HeaderRoutingModule { }

