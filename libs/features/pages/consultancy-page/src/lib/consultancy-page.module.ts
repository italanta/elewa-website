import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultancyRoutingModule } from './consultancy.routing';

import { ConsultancyPageComponent } from './main/consultancy-page/consultancy-page.component';

@NgModule({
  imports: [CommonModule, ConsultancyRoutingModule],
  declarations: [ConsultancyPageComponent],
})
export class ConsultancyPageModule {}
