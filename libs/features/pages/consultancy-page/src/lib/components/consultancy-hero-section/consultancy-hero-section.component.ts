import { Component } from '@angular/core';
import { HeroText } from '@elewa-website/models/schema/ui/texts';
import { SliderButtonData } from '@elewa-website/models/schema/ui/buttons';


@Component({
  selector: 'elewa-website-consultancy-hero-section',
  templateUrl: './consultancy-hero-section.component.html',
  styleUrls: ['./consultancy-hero-section.component.scss'],
})
export class ConsultancyHeroSectionComponent {
  heroTexts: HeroText = {
    title:"Learning Design",
    description:"Your organisation has the potential to turn every task into an opportunity to learn. From growing crops, to nursing someone to good health, to developing the next-generation technology. Let’s work together to make the magic happen."
  }

  buttonData: SliderButtonData = {
    text: "Unlock your potential"
  }
}