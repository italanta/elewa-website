import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const TEXTS_ROUTES: Routes = [
    { path: '', }
];

@NgModule({
    imports: [RouterModule.forChild(TEXTS_ROUTES)],
    exports: [],
})

export class TextsRoutesMoule {}