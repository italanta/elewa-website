import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslocoModule } from '@ngneat/transloco';

import { FooterComponent } from './components/footer/footer.component';
@NgModule({
  imports: [CommonModule, TranslocoModule],
  declarations: [FooterComponent],
  exports: [FooterComponent],
})
export class AppFooterModule {}
