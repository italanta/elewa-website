import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutPageComponent } from './main/about-page/about-page.component';

import { AboutRoutingModule } from './about.routing';
import { CardsModule } from '@elewa-website/elements/cards';
import { SdgSectionComponent } from './sdg-section/sdg-section.component';

@NgModule({
  imports: [CommonModule, AboutRoutingModule, CardsModule],
  declarations: [AboutPageComponent, SdgSectionComponent],
})
export class FeaturesPagesAboutModule {}
