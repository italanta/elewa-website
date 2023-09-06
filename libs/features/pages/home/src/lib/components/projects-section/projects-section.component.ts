import { Component } from '@angular/core';

import { __highlightedProjects } from '@elewa-website/data/sections';

@Component({
  selector: 'elewa-website-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.scss'],
})
export class ProjectsSectionComponent {
  projectItems = __highlightedProjects;
}
