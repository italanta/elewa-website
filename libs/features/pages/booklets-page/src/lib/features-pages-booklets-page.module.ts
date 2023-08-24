import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterModule, Route } from '@angular/router';
import { featuresPagesBookletsPageRoutes } from './lib.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(featuresPagesBookletsPageRoutes),
    RouterModule,
  ],
})
export class FeaturesPagesBookletsPageModule {}
