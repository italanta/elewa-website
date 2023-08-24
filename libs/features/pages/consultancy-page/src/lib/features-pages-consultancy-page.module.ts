import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterModule, Route } from '@angular/router';
import { featuresPagesConsultancyPageRoutes } from './consultancy-page';
import { ConsultancyPageComponent } from './consultancy-page/consultancy-page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(featuresPagesConsultancyPageRoutes),
    RouterModule,
  ],
  declarations: [ConsultancyPageComponent],
})
export class ConsultancyPageModule {}
