import { Component } from '@angular/core';

import { __highlightedProjects } from '@elewa-website/data/sections';

@Component({
  selector: 'elewa-website-content-dev-projects-section',
  templateUrl: './content-dev-projects-section.component.html',
  styleUrls: ['./content-dev-projects-section.component.scss'],
})
export class ContentDevProjectsSectionComponent {
  projectItems = __highlightedProjects;
}
