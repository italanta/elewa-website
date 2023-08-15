import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElewaTextContentItemComponent } from './components/elewa-text-content-item/elewa-text-content-item.component';

export const TEXTS_ROUTES: Routes = [
    { path: '', component: ElewaTextContentItemComponent }
];

@NgModule({
    imports: [RouterModule.forChild(TEXTS_ROUTES)],
    exports: [],
})

export class TextsRoutesMoule {}