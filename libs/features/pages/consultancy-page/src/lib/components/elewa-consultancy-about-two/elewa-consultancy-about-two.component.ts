import { Component } from '@angular/core';
import { __consultancyAboutTwo, __consultancyImageConfig } from '@elewa-website/data/sections';

@Component({
  selector: 'elewa-website-elewa-consultancy-about-two',
  templateUrl: './elewa-consultancy-about-two.component.html',
  styleUrls: ['./elewa-consultancy-about-two.component.scss'],
})
export class ElewaConsultancyAboutTwoComponent {

  consultancyHeroTwo = __consultancyAboutTwo;
  consultancyImageTwo = __consultancyImageConfig;
  
}
