import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ElewaTextSectionComponent } from './components/elewa-text-section/elewa-text-section.component';

export const TEXTS_ROUTES: Routes = [
  { path: '', component: ElewaTextSectionComponent },

];

@NgModule({
  imports: [RouterModule.forChild(TEXTS_ROUTES)],
  exports: [],
})
export class TextsRoutesModule {}