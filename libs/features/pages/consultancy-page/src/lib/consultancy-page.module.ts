import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultancyRoutingModule } from './consultancy.routing';

import { ConsultancyPageComponent } from './main/consultancy-page/consultancy-page.component';
import { ElewaConsultancyAboutTwoComponent } from './main/elewa-consultancy-about-two/elewa-consultancy-about-two.component';
import { BannersModule } from '@elewa-website/elements/banners';

@NgModule({
  imports: [CommonModule, ConsultancyRoutingModule, BannersModule],
  declarations: [ConsultancyPageComponent, ElewaConsultancyAboutTwoComponent],
})
export class ConsultancyPageModule {}
