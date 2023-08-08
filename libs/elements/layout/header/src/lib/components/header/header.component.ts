import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'elewa-website-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {
    const hambuger = document.querySelector('.hambuger');
    const navMenu = document.querySelector('.nav-menu');

    hambuger?.addEventListener('click', () => {
      hambuger.classList.toggle('active');
      navMenu?.classList.toggle('active');
    });

    navMenu?.querySelectorAll('.nav-links').forEach((link) => {
      console.log(link);
      link.addEventListener('click', () => {
        hambuger?.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }
}
