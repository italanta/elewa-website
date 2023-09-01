import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppHeaderModule } from '@elewa-website/elements/layout/header';
import { TextsModule } from '@elewa-website/elements/layout/texts';
import { ButtonsModule } from '@elewa-website/elements/layout/buttons';
@Component({
  selector: 'elewa-website-conv-hero-section',
  standalone: true,
  imports: [CommonModule, AppHeaderModule, TextsModule, ButtonsModule],
  templateUrl: './conv-hero-section.component.html',
  styleUrls: ['./conv-hero-section.component.scss'],
})
export class ConvHeroSectionComponent {
  heroTextData = {
    title: 'Conversational Learning',
    subtitle: '',
    description: 'Your organisation has the potential to turn every task into an opportunity to learn. From growing crops, to nursing someone to good health, to developing the next-generation technology, let’s work together to make the magic happen.'
  };
  sliderButtonData = {
    text: 'Unlock your potential',
  }
}
