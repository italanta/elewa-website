import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterModule, Route } from '@angular/router';
import { featuresPagesConsultancyPageRoutes } from './lib.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(featuresPagesConsultancyPageRoutes),
    RouterModule,
  ],
})
export class ConsultancyPageModule {}
