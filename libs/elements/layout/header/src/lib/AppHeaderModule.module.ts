import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';

import { HeaderRoutingModule } from './header.routing';

@NgModule({
  imports: [CommonModule, HeaderRoutingModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class AppHeaderModule {}
