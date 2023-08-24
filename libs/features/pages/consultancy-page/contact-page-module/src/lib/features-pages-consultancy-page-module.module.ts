import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultancyPageComponent } from './consultancy-page/consultancy-page.component';
 import { ConsultancyRoutingModule } from './consultancy.routing';
@NgModule({
  imports: [CommonModule,ConsultancyRoutingModule],
  declarations: [ConsultancyPageComponent],
})
export class FeaturesPagesConsultancyPageModule {}
