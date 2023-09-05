import { Component } from '@angular/core';

@Component({
  selector: 'elewa-website-content-dev-hero-section',
  templateUrl: './content-dev-hero-section.component.html',
  styleUrls: ['./content-dev-hero-section.component.scss'],
})
export class ContentDevHeroSectionComponent {
  heroTextData = {
    title: 'Content Development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolorem ipsum quia dolor sit Eos qui ratione voluptatem sequi nesciunt.',
  };
  sliderButtonData = {
    text: 'Unlock your potential',
  };
}
