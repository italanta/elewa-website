import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonsModule } from '@elewa-website/elements/layout/buttons';
import { AppHeaderModule } from '@elewa-website/elements/layout/header';
import { AppFooterModule } from '@elewa-website/elements/layout/footer';

import { MainPageComponent } from './main-page/main-page.component';
@NgModule({
  imports: [CommonModule, ButtonsModule, AppHeaderModule, AppFooterModule],
  declarations: [MainPageComponent],
  exports: [MainPageComponent],
})
export class MainPageModule {}
