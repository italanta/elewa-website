import { Component } from '@angular/core';


// url for the logo
const logoUrl: string = "https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690297/elewa-group-website/Icons/SVG/_Logo/Logo_White_arvoyx.svg"

@Component({
  selector: 'elewa-website-header',
  templateUrl: './header.component.html',
  styleUrls: [ 
    './large-screen.component.scss', 
    './medium-screen.component.scss', 
    './small-screen.component.scss',
    './contact-button.component.scss',
    './nav-menu.component.scss'
  ],
})

  /** 
  * This is a header component class. 
  * With this class, you can link the header section
  */
export class HeaderComponent {

  LOGO_URL = logoUrl;
  

  // To check if navigation menu is open or not
  isMenuOpen = false;
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }


}

// The selector <elewa-website-header> </elewa-website-header> should be added on top of each page
