import { Component } from '@angular/core';
import { __homeButtonData, __homeHerotexts, __homeImageConfig } from '@elewa-website/models/data/sections';


@Component({
  selector: 'elewa-website-home-hero-section',
  templateUrl: './home-hero-section.component.html',
  styleUrls: [ './home-hero-section.component.scss' ],
})
export class HomeHeroSectionComponent {

  buttonData = __homeButtonData
  herotexts = __homeHerotexts
  imageConfig = __homeImageConfig

}
