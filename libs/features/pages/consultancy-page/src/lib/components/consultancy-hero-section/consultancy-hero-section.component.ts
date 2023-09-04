import { Component } from '@angular/core';

@Component({
  selector: 'elewa-website-consultancy-hero-section',
  templateUrl: './consultancy-hero-section.component.html',
  styleUrls: ['./consultancy-hero-section.component.scss'],
})
export class ConsultancyHeroSectionComponent {
  heroSectionData = {
    title: 'Learning design',
    subtitle: '',
    description:
      'Your organisation has the potential to turn every task into an opportunity to learn. From growing crops, to nursing someone to good health, to developing the next-generation technology, let’s work together to make the magic happen.',
  };
  buttonData = {
    text: 'Unlock your potential',
  };
}
