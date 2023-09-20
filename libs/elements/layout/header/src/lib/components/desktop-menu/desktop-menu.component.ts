import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'elewa-website-desktop-menu',
  templateUrl: './desktop-menu.component.html',
  styleUrls: ['./desktop-menu.component.scss'],
})
export class DesktopMenuComponent {
  @Input() isMenuActive!: boolean;
  @Output() solutionsMenuStatus = new EventEmitter<boolean>();

  /** open the solutions menu state */
  openSolutionsMenu() {
    this.solutionsMenuStatus.emit(true);
  }
}
