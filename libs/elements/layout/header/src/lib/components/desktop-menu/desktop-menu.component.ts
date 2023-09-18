import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'elewa-website-desktop-menu',
  templateUrl: './desktop-menu.component.html',
  styleUrls: ['./desktop-menu.component.scss'],
})
export class DesktopMenuComponent {
  @Input() isMenuActive!: boolean;
  @Output() solutionsMenuStatus = new EventEmitter<boolean>();

  /** toggle the solutions menu state */
  toggleSolutionsMenu(event: any) {
    event.preventDefault();
    this.solutionsMenuStatus.emit(!this.isMenuActive);
  }
}
