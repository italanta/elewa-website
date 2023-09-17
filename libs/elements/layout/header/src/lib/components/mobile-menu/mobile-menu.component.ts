import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'elewa-website-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss'],
})
export class MobileMenuComponent {
  @Input() isMenuActive!: boolean;
  @Output() solutionsMenuStatus = new EventEmitter<boolean>();

  isMobileMenuActive = false;

  /** toggle the solutions menu state */
  toggleSolutionsMenu() {
    this.solutionsMenuStatus.emit(!this.isMenuActive);
  }

  /** toggle the mobile menu state */
  toogleMobileMenu() {
    this.isMobileMenuActive = !this.isMobileMenuActive;
  }
}
