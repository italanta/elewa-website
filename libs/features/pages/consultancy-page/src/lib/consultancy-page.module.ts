import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultancyRoutingModule } from './consultancy.routing';

import { ConsultancyPageComponent } from './main/consultancy-page/consultancy-page.component';
import { ElewaConsultancyAboutOneComponent } from './main/elewa-consultancy-about-one/elewa-consultancy-about-one.component';
import { BannersModule } from '@elewa-website/elements/banners';

@NgModule({
  imports: [CommonModule, ConsultancyRoutingModule, BannersModule],
  declarations: [ConsultancyPageComponent, ElewaConsultancyAboutOneComponent],
})
export class ConsultancyPageModule {}
