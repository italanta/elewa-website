import { Component } from '@angular/core';

@Component({
  selector: 'elewa-website-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  // This 'isActive' value combined with the ngClass directive adds/removes the 'active' class to the hambuger and nav-menu elements, which will then determine how they will be displayed on screen. //
  isActive = false;

  // a custom event listener which updates the isActive value
  toggleActiveClass(isActive: boolean) {
    this.isActive = isActive;
  }
}
