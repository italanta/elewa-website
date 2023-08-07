import { Component } from '@angular/core';

@Component({
  selector: 'elewa-website-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'elewa-website';
  
  /* data that will be display when i hover over my button */
  myButtonData = {
    text: 'Contact us',
  };
}
