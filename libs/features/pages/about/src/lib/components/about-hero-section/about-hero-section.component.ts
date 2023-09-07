import { Component } from '@angular/core';
import { __elewaImageData } from '@elewa-website/data/schema/ui/images';


@Component({
  selector: 'elewa-website-about-hero-section',
  templateUrl: './about-hero-section.component.html',
  styleUrls: ['./about-hero-section.component.scss'],
})
export class AboutHeroSectionComponent {
  heroAboutData = {
    title: 'Conversational Learning',
    subtitle: '',
    description: 'Your organisation has the potential to turn every task into an opportunity to learn. From growing crops, to nursing someone to good health, to developing the next-generation technology, let’s work together to make the magic happen.'
  };
  image= __elewaImageData

}