import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultancyPageComponent } from './main/consultancy-page/consultancy-page.component';

import { ConsultancyPageRoutingModule } from './consultancy-page.routing';

@NgModule({
  imports: [CommonModule, ConsultancyPageRoutingModule],
  declarations: [ConsultancyPageComponent],
  exports: [ConsultancyPageComponent],
})
export class ConsultancyPageModule {}
