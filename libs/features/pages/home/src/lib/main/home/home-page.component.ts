import { Component } from '@angular/core';
import { HeroText } from '@elewa-website/models/schema/ui/texts';

@Component({
  selector: 'elewa-website-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {

  // display the text using text-section component

  public heroTexts: HeroText[] = [
    {
      title: 'Training at scale',
      subtitle: 'Human-centered, meaningful and enjoyable',
    },
    {
      title: 'Content development',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    }
  ];
}
