import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultancyRoutingModule } from './consultancy.routing';

import { ConsultancyPageComponent } from './main/consultancy-page/consultancy-page.component';
import { ElewaConsultancyAboutOneComponent } from './elewa-consultancy-about-one/elewa-consultancy-about-one.component';
import { BannersModule } from '@elewa-website/elements/banners';
import { TextsModule } from '@elewa-website/elements/layout/texts';

@NgModule({
  imports: [CommonModule, ConsultancyRoutingModule,BannersModule,TextsModule], /**import modules */
  declarations: [ConsultancyPageComponent, ElewaConsultancyAboutOneComponent],
})
export class ConsultancyPageModule {}
