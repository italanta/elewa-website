import { Component } from '@angular/core';

@Component({
  selector: 'elewa-website-booklets-hero-section',
  templateUrl: './booklets-hero-section.component.html',
  styleUrls: ['./booklets-hero-section.component.scss'],
})
export class BookletsHeroSectionComponent {
  textData = {
    title: 'Booklets',
    subtitle: '',
    description: 'Your organisation has the potential to turn every task into an opportunity to learn. From growing crops, to nursing someone to good health, to developing the next-generation technology, let’s work together to make the magic happen.'
  };
  heroButtonData = {
    text: 'Unlock your potential'
  }
}
