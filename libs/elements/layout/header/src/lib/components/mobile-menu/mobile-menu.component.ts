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

  toggleSolutionsMenu() {
    this.solutionsMenuStatus.emit(!this.isMenuActive);
  }

  toogleMobileMenu() {
    this.isMobileMenuActive = !this.isMobileMenuActive;
  }
}
