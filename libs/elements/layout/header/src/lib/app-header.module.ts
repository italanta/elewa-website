import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';

import { HeaderComponent } from './components/header/header.component';
import { ToggleMenuDirective } from './directives/toggle-menu.directive';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';

@NgModule({
  imports: [CommonModule, TranslocoModule, RouterModule],
  declarations: [
    HeaderComponent,
    ToggleMenuDirective,
    HeaderMenuComponent,
    MenuItemComponent,
  ],
  exports: [HeaderComponent],
})
export class AppHeaderModule {}
