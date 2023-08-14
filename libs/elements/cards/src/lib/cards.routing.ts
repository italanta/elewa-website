import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

export const CARDS_ROUTES: Routes = [
    { path: ''}
];

@NgModule({
    imports: [RouterModule.forChild(CARDS_ROUTES)],
    exports: [],
})
export class CardsRoutesModule {}