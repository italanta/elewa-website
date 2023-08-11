import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslocoModule } from '@ngneat/transloco'

import { HeaderComponent } from './components/header/header.component';

@NgModule({
  imports: [CommonModule, TranslocoModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class AppHeaderModule {}
