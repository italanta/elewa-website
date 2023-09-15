import { Component } from '@angular/core';
import { learning_design,  learning_design2, content_development, conversational_learning  } from '@elewa-website/data/ui/content-text'

@Component({
  selector: 'elewa-website-education-section',
  templateUrl: './education-section.component.html',
  styleUrls: ['./education-section.component.scss'],
})
export class EducationSectionComponent {
  learningdesign = learning_design
  learningdesign2 = learning_design2
  content_dev = content_development
  conversationallearning = conversational_learning
}