import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslocoModule } from '@ngneat/transloco';

import { HeaderComponent } from './components/header/header.component';
import { ToggleMenuDirective } from './directives/toggle-menu.directive';

@NgModule({
  imports: [CommonModule, TranslocoModule],
  declarations: [HeaderComponent, ToggleMenuDirective],
  exports: [HeaderComponent],
})
export class AppHeaderModule {}
