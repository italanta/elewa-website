import { Component } from '@angular/core';

import { __highlightedProjects } from '@elewa-website/data/sections';

@Component({
  selector: 'elewa-website-consultancy-projects-section',
  templateUrl: './consultancy-projects-section.component.html',
  styleUrls: ['./consultancy-projects-section.component.scss'],
})
export class ConsultancyProjectsSectionComponent {
  projectItems = __highlightedProjects;
}
