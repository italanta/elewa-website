import { Component } from '@angular/core';

@Component({
  selector: 'elewa-website-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {


  ngOnInit() {
    // Subscribe to language changes
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menus");
    const navLink = document.querySelectorAll(".nav-links");

    const mobileMenu = () => {
      hamburger?.classList.toggle("active")
      navMenu?.classList.toggle("active")
    }

    const closeMenu = () => {
      hamburger?.classList.remove("active")
      navMenu?.classList.remove("active")
    }

    hamburger?.addEventListener("click" , mobileMenu)
    navLink.forEach((l) => l.addEventListener("click",closeMenu))
   
    
  }
}
