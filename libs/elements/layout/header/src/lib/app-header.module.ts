import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';

import { HeaderComponent } from './components/header/header.component';
import { ToggleMenuDirective } from './directives/toggle-menu.directive';
import { HeaderMenuComponent } from './components/solutions/header-menu/header-menu.component';
import { MenuItemComponent } from './components/solutions/menu-item/menu-item.component';
import { MobileMenuComponent } from './components/mobile-menu/mobile-menu.component';

@NgModule({
  imports: [CommonModule, TranslocoModule, RouterModule],
  declarations: [
    HeaderComponent,
    ToggleMenuDirective,
    HeaderMenuComponent,
    MenuItemComponent,
    MobileMenuComponent,
  ],
  exports: [HeaderComponent],
})
export class AppHeaderModule {}
