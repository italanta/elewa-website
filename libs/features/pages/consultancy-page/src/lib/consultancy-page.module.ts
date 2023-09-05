import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultancyRoutingModule } from './consultancy.routing';

import { ConsultancyPageComponent } from './main/consultancy-page/consultancy-page.component';
import { ElewaConsultancyAboutOneComponent } from './elewa-consultancy-about-one/elewa-consultancy-about-one.component';

@NgModule({
  imports: [CommonModule, ConsultancyRoutingModule],
  declarations: [ConsultancyPageComponent, ElewaConsultancyAboutOneComponent],
})
export class ConsultancyPageModule {}
