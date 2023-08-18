import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router'
import { ElewaImageContainerComponent } from "./components/elewa-image-container/elewa-image-container.component";

export const IMAGES_ROUTES: Routes = [
    { path: '', component: ElewaImageContainerComponent }
]

@NgModule({
    imports: [RouterModule.forChild(IMAGES_ROUTES)],
    exports: []
})
export class ImagesRoutesMoudule{}