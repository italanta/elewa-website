import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppHeaderModule } from '@elewa-website/elements/layout/header';
import { TextsModule } from '@elewa-website/elements/layout/texts';

@Component({
  selector: 'elewa-website-conv-hero-section',
  standalone: true,
  imports: [CommonModule, AppHeaderModule, TextsModule],
  templateUrl: './conv-hero-section.component.html',
  styleUrls: ['./conv-hero-section.component.scss'],
})
export class ConvHeroSectionComponent {
  heroTextData = {
    title: 'Welcome to My Angular App',
    subtitle: 'Built with Angular',
    description: 'This is a sample Angular app.'
  };
}
