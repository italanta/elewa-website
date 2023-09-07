import { Component } from '@angular/core';

import { HeroText } from '@elewa-website/models/schema/ui/texts';

@Component({
  selector: 'elewa-website-consultancy-hero-section',
  templateUrl: './consultancy-hero-section.component.html',
  styleUrls: ['./consultancy-hero-section.component.scss'],
})
export class ConsultancyHeroSectionComponent {
  consultancyHeroSection : HeroText = {
    title: 'Learning design',
    description: "Your organization has the potential to turn every task into an opportunity to learn. From growing crops, to nursing someone to good health to developing the next-generation technology. Let's work together to make the magic happen."
  }
}
