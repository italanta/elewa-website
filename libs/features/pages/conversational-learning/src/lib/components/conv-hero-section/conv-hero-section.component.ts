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
      "Take a lively journey of discovery where knowledge flows in both directions. It's all about sparking conversations, forging connections, and fostering collaboration.",
  };
  sliderButtonData = {
    text: 'Unlock your potential',
  };
}
