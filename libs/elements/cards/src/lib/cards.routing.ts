import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElewaNewsItemCardComponent } from './components/elewa-news-item-card/elewa-news-item-card.component';

export const CARDS_ROUTES: Routes = [
  { path: '', component: ElewaNewsItemCardComponent },

];

@NgModule({
  imports: [RouterModule.forChild(CARDS_ROUTES)],
  exports: [],
})
export class CardsRoutesModule {}