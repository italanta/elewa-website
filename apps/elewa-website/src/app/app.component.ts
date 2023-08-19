import { Component } from '@angular/core';

@Component({
  selector: 'elewa-website-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'elewa-website';

  // Button function; when button is clicked, the text will be displayed in the console as in below.
  
  Click(): void {
    console.log('Button Clicked!');
  
  }

}
