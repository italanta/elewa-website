import { Component } from '@angular/core';

import { __highlightedProjects } from '@elewa-website/data/sections';

@Component({
  selector: 'elewa-website-booklets-projects-section',
  templateUrl: './booklets-projects-section.component.html',
  styleUrls: ['./booklets-projects-section.component.scss'],
})
export class BookletsProjectsSectionComponent {
  projectItems = __highlightedProjects;
}
