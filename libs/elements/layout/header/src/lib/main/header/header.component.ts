import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'elewa-website-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  backgroundColor!: string;
  isMenuActive = false;
  isSmallScreen = false;

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.checkWindowSize();
  }

  constructor(private _route: Router) {
    this.backgroundColor = this.getBackgroundColor();
    this.checkWindowSize();
  }

  /** check the window size */
  checkWindowSize() {
    this.isSmallScreen = window.innerWidth <= 768;
  }

  /** toggle the solutions menu state, called from child components*/
  toggleSolutionsMenuState(menuState: boolean) {
    this.isMenuActive = menuState;
  }

  getBackgroundColor() {
    const url = this._route.url.slice(1);

    switch (url) {
      case 'home':
        return '#f9f8f4';
      case 'about':
        return '#f9f8f4';
      case 'consultancy':
        return '#dbc2f5';
      case 'booklets':
        return '#FBE8D7';
      case 'content-development':
        return '#FCF6E4';
      case 'conversational-learning':
        return '#FAE9E8';
      default:
        return '#f9f8f4';
    }
  }
}
