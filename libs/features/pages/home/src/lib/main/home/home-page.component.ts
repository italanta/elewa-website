import { Component, Input } from '@angular/core';
import { SliderButtonData } from '@elewa-website/models/schema/ui/buttons';

@Component({
  selector: 'elewa-website-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  buttonData: SliderButtonData ={
    text: "ulock your potential",
  };
}
