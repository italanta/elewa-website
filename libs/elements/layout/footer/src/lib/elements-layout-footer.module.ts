import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonsModule } from '@elewa-website/elements/layout/buttons';

import { TranslocoModule } from '@ngneat/transloco';

@NgModule({
  imports: [ CommonModule, TranslocoModule, ButtonsModule ],
  declarations: [FooterComponent],
  exports: [FooterComponent]
})
export class ElementsLayoutFooterModule {}
