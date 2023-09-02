import { Component } from '@angular/core';

import { HeroText } from '@elewa-website/models/schema/ui/texts';
import { SliderButtonData } from '@elewa-website/models/schema/ui/buttons';

@Component({
  selector: 'elewa-website-content-dev-hero-section',
  templateUrl: './content-dev-hero-section.component.html',
  styleUrls: ['./content-dev-hero-section.component.scss'],
})
export class ContentDevHeroSectionComponent {
  heroTexts: HeroText = {
    title:"Content development",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolorem ipsum quia dolor sit Eos qui ratione voluptatem sequi nesciunt."
  }

  buttonData: SliderButtonData = {
    text: "unlock your potential"
  }


}
