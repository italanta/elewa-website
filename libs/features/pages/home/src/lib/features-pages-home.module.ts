import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';

import { UiCarrouselModule } from '@elewa-website/elements/ui/carrousel';

@NgModule({
  imports: [
    CommonModule,
    UiCarrouselModule
  ],
  declarations: [HomeComponent],
  exports:[HomeComponent]
})
export class FeaturesPagesHomeModule {}
