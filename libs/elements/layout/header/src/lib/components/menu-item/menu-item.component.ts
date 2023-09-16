import { Component, Input } from '@angular/core';

import { MenuItem } from '@elewa-website/models/schema/ui/header';

@Component({
  selector: 'elewa-website-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
})
export class MenuItemComponent {
  @Input() menuItem!: MenuItem;
}
