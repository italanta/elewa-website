import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultancyRoutingModule } from './consultancy.routing';

import { ConsultancyPageComponent } from './main/consultancy-page/consultancy-page.component';
import { ElewaConsultancyAboutTwoComponent } from './main/elewa-consultancy-about-two/elewa-consultancy-about-two.component';

@NgModule({
  imports: [CommonModule, ConsultancyRoutingModule],
  declarations: [ConsultancyPageComponent, ElewaConsultancyAboutTwoComponent],
})
export class ConsultancyPageModule {}
