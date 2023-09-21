import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'elewa-website-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  backgroundColor!: string;

  constructor(private _route: Router) {
    this.backgroundColor = this.getBackgroundColor();
  }

  goToPage(url: string) {
    this._route.navigate([url]);
  }

  goToSocial(url: string) {
    window.open(url, '_blank');
  }

  getBackgroundColor() {
    const url = this._route.url.slice(1);

    switch (url) {
      case 'about':
        return '#dbc2f5';
      default:
        return '#f9f8f4';
    }
  }
}
