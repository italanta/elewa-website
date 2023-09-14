import { Component } from '@angular/core';
import { learning_design } from '@elewa-website/data/ui/content-text'

@Component({
  selector: 'elewa-website-education-section',
  templateUrl: './education-section.component.html',
  styleUrls: ['./education-section.component.scss'],
})
export class EducationSectionComponent {
  learningdesign = learning_design
}