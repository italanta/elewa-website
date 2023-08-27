import { Component } from '@angular/core';
import { ElewaNormalButtonComponent } from 'libs/elements/layout/buttons/src/lib/elewa-normal-button/elewa-normal-button.component';
import { ButtonData } from 'libs/models/schema/ui/buttons/src/lib/button.interface';
@Component({
  selector: 'elewa-website-normal-button',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {

  myButtonData: ButtonData = {
    text: 'Click Me',
    bgColor: '#007bff',
    color: '#fff',
    hoverBgColor: '#0056b3',
    hoverColor: '#fff',
  };
}
