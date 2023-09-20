import { Component } from '@angular/core';

@Component({
  selector: 'elewa-website-conv-hero-section',

  templateUrl: './conv-hero-section.component.html',
  styleUrls: ['./conv-hero-section.component.scss'],
})
export class ConvHeroSectionComponent {
  heroTextData = {
    title: 'Conversational Learning',
    subtitle: '',
    description:
      'Your organisation has the potential to turn every task into an opportunity to learn. From growing crops, to nursing someone to good health, to developing next-generation technology. Let’s work together to make the magic happen.',
  };
  sliderButtonData = {
    text: 'Unlock your potential',
  };
}
