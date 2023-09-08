import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'elewa-website-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  backgroundColor!: string;
  isActive = false;

  constructor(private _route: Router) {
    this.backgroundColor = this.getBackgroundColor();
  }

  toggleActiveClass(isActive: boolean) {
    this.isActive = isActive;
  }

  getBackgroundColor() {
    const url = this._route.url.slice(1);

    switch (url) {
      case 'home':
        return '#f9f8f4';
      case 'about':
        return '#f9f8f4';
      default:
        return '#f9f8f4';
    }
  }
}
