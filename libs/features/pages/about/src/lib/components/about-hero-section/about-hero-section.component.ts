import { Component } from '@angular/core';
import { __elewaImageData } from '@elewa-website/data/schema/ui/images';
import { __highlightedAboutItems } from '@elewa-website/data/sections';


@Component({
  selector: 'elewa-website-about-hero-section',
  templateUrl: './about-hero-section.component.html',
  styleUrls: ['./about-hero-section.component.scss'],
})
export class AboutHeroSectionComponent {
  highlightedAboutItems = __highlightedAboutItems
  image= __elewaImageData

}