import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { ToggleMenuDirective } from './directives/toggle-menu.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [HeaderComponent, ToggleMenuDirective],
  exports: [HeaderComponent],
})
export class AppHeaderModule {}
