import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';

import { HeaderComponent } from './main/header/header.component';
import { HeaderMenuComponent } from './solutions/header-menu/header-menu.component';
import { MenuItemComponent } from './solutions/menu-item/menu-item.component';
import { MobileMenuComponent } from './components/mobile-menu/mobile-menu.component';
import { DesktopMenuComponent } from './components/desktop-menu/desktop-menu.component';

@NgModule({
  imports: [CommonModule, TranslocoModule, RouterModule],
  declarations: [
    HeaderComponent,
    HeaderMenuComponent,
    MenuItemComponent,
    MobileMenuComponent,
    DesktopMenuComponent,
  ],
  exports: [HeaderComponent],
})
export class AppHeaderModule {}
