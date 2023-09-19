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
      case 'home/en':
        return '#f9f8f4';
      case 'about/en':
        return '#f9f8f4';
      case 'consultancy/en':
        return '#dbc2f5';
      case 'booklets/en':
        return '#FBE8D7';
      case 'content-development/en':
        return '#FCF6E4';
      case 'conversational-learning/en':
        return '#FAE9E8';
      default:
        return '#f9f8f4';
    }
  }
}
