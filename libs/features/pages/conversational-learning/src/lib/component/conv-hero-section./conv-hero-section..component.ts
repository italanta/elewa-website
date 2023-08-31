import { Component } from '@angular/core';
import { HeroText } from '@elewa-website/models/schema/ui/texts';

@Component({
  selector: 'elewa-website-conv-hero-section',
  templateUrl: './conv-hero-section..component.html',
  styleUrls: ['./conv-hero-section..component.scss'],
})
export class ConvHeroSectionComponent {
  heroTexts: HeroText = {
    title: 'Your Hero Title',
    subtitle: 'Your Hero Subtitle',
    description: 'Your Hero Description',
  };
}
