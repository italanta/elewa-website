import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';

@NgModule({
  imports: [CommonModule],
  declarations: [MainPageComponent],
  exports: [MainPageComponent],
})
export class MainPageModule {}
