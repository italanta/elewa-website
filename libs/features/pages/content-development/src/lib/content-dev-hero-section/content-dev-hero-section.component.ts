import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHeaderModule } from '@elewa-website/elements/layout/header';
import { TextsModule } from '@elewa-website/elements/layout/texts';
import { ButtonsModule } from '@elewa-website/elements/layout/buttons';

@Component({
  selector: 'elewa-website-content-dev-hero-section',
  standalone: true,
  imports: [CommonModule, AppHeaderModule, TextsModule, ButtonsModule], /**import modules to be reused*/
  templateUrl: './content-dev-hero-section.component.html',
  styleUrls: ['./content-dev-hero-section.component.scss'],
})
export class ContentDevHeroSectionComponent {}
