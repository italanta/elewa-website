import { Component } from '@angular/core';
import { __convLearningAboutTwo } from '@elewa-website/data/sections';

@Component({
  selector: 'elewa-website-conv-about-section-two',
  templateUrl: './conv-about-section-two.component.html',
  styleUrls: ['./conv-about-section-two.component.scss'],
})
export class ConvAboutSectionTwoComponent {
  imageAndDetails = __convLearningAboutTwo
}
