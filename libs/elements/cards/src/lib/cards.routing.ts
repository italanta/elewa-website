import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ElewaInfoCardComponent } from './components/elewa-info-card/elewa-info-card.component';

export const CARDS_ROUTES: Routes = [
    { path: '', component: ElewaInfoCardComponent}
];

@NgModule({
    imports: [RouterModule.forChild(CARDS_ROUTES)],
    exports: [],
})
export class CardsRoutesModule {}