import { Component } from '@angular/core';

@Component({
  selector: 'elewa-website-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  /** 
  * This is a header component class. 
  * With this class, you can link the header section
  */

  logoUrl = "https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690297/elewa-group-website/Icons/SVG/_Logo/Logo_White_arvoyx.svg"

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  constructor () {
    
  }
}
