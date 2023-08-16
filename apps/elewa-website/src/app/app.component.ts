import { Component } from '@angular/core';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { SliderButtonData } from 'libs/models/schema/ui/buttons/slider-button-data.interface';

@Component({
  selector: 'elewa-website-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'elewa-website';
  // Define the sliderButtonData property
  sliderButtonData: SliderButtonData = {
    // Initialize with appropriate values
    text: 'Click Me', // Replace with your text
    bgColour: '#FF5733', // Replace with your color
    color: '#FFFFFF', // Replace with your color
    hoverBgColour: '#FF8A65', // Replace with your color
    hoverColor: '#000000', // Replace with your cga
  };
  // define the handleClick method
  handleClick(): void {
  // click handling logic here
  }
}
