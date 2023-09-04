import { Component } from '@angular/core';

import { HeroText } from '@elewa-website/models/schema/ui/texts';
import { SliderButtonData } from '@elewa-website/models/schema/ui/buttons';

@Component({
  selector: 'elewa-website-booklets-hero-section',
  templateUrl: './booklets-hero-section.component.html',
  styleUrls: ['./booklets-hero-section.component.scss'],
})
export class BookletsHeroSectionComponent {
  herotexts: HeroText = {
    title:"Booklets",
    description:"Your organisation has the potential to turn every task into an opportunity to learn. From growing crops, to nursing someone to good health, to developing the next-generation technology, let’s work together to make the magic happen."
  }

  buttonData: SliderButtonData = {
    text: "Unlock your Potential"
  }


}
