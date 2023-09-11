import { Component } from '@angular/core';
import { __highlightedAboutItems } from '@elewa-website/data/sections';
import { __elewaImageData } from '@elewa-website/data/schema/ui/images';
import { ImageVisualisation } from '@elewa-website/models/schema/ui/images';

@Component({
  selector: 'elewa-website-about-hero-section',
  templateUrl: './about-hero-section.component.html',
  styleUrls: ['./about-hero-section.component.scss'],
})
export class AboutHeroSectionComponent {
  herotexts = __highlightedAboutItems
  image= __elewaImageData
  ImageVisualisation = ImageVisualisation;
}
