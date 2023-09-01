import { Component } from '@angular/core';
import { HeroText } from '@elewa-website/models/schema/ui/texts';
import { SliderButtonData } from '@elewa-website/models/schema/ui/buttons';

@Component({
  selector: 'elewa-website-conv-hero-section',
  templateUrl: './conv-hero-section.component.html',
  styleUrls: ['./conv-hero-section.component.scss'],
})
export class ConvHeroSectionComponent {
  heroTexts: HeroText = {
    title: 'Conversational Learning',
    description: `Your organisation has the potential to turn every task into an opportunity to learn.
      From growing crops to nursing someone to good health, to developing the next-generation technology,
      let's work together to make the magic happen.`,
  };
  sliderButtonData: SliderButtonData = {
    text: 'Unlock your potential',
    bgColor: 'InitialBackgroundColor',
    color: 'InitialColor',
    hoverBgColor: 'HoverBackgroundColor',
    hoverColor: 'HoverColor',
    iconBackgroundColor: 'InitialIconBackgroundColor',
    iconColor: 'InitialIconColor',
    hoverIconBackgroundColor: 'HoverIconBackgroundColor',
    hoverIconColor: 'HoverIconColor',
  };
}
