import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

export const ELEWA_HOME_ROUTES: Route[] = [


];

@NgModule({
  imports: [RouterModule.forChild(ELEWA_HOME_ROUTES)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
