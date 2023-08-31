import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutPageComponent } from './main/about-page/about-page.component';

import { AboutRoutingModule } from './about.routing'

@NgModule({
  imports: [CommonModule, AboutRoutingModule],
  declarations: [AboutPageComponent],
})
export class FeaturesPagesAboutModule {}
