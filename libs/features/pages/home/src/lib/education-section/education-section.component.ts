import { Component } from '@angular/core';
import {
  __highlightedEducationSection1,
  __highlightedEducationSection2,
  __highlightedEducationSection3,
  __highlightedEducationSection4,
} from '@elewa-website/data/sections';

@Component({
  selector: 'elewa-website-education-section',
  templateUrl: './education-section.component.html',
  styleUrls: ['./education-section.component.scss'],
})
export class EducationSectionComponent {
  educationSection = __highlightedEducationSection1;
  educationSection2 = __highlightedEducationSection2;
  educationSection3 = __highlightedEducationSection3;
  educationSection4 = __highlightedEducationSection4;
}
