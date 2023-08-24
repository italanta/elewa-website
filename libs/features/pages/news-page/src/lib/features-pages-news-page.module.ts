import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterModule, Route } from '@angular/router';
import { featuresPagesNewsPageRoutes } from './lib.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(featuresPagesNewsPageRoutes),
    RouterModule,
  ],
})
export class FeaturesPagesNewsPageModule {}
