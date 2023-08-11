import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { ElewaImageContainerComponent } from './components/elewa-image-container/elewa-image-container.component';

export const ELEWA_HOME_ROUTES: Route[] = [

  { path: '', component: ElewaImageContainerComponent },

];

@NgModule({
  imports: [RouterModule.forChild(ELEWA_HOME_ROUTES)],
  exports: [RouterModule]
})
export class ElewaImageContainerRoutingModule { }