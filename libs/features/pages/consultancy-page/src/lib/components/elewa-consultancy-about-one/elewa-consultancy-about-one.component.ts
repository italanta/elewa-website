import { Component } from '@angular/core';
import { _consultancyPageAbout } from '@elewa-website/data/sections';

@Component({
  selector: 'elewa-website-elewa-consultancy-about-one',
  templateUrl: './elewa-consultancy-about-one.component.html',
  styleUrls: ['./elewa-consultancy-about-one.component.scss'],
})
export class ElewaConsultancyAboutOneComponent {
  consultancyPageAbout = _consultancyPageAbout
}
