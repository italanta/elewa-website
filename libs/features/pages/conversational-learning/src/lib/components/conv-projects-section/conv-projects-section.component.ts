import { Component } from '@angular/core';

import { __highlightedProjects } from '@elewa-website/data/sections';

@Component({
  selector: 'elewa-website-conv-projects-section',
  templateUrl: './conv-projects-section.component.html',
  styleUrls: ['./conv-projects-section.component.scss'],
})
export class ConvProjectsSectionComponent {
  projectItems = __highlightedProjects;
}
