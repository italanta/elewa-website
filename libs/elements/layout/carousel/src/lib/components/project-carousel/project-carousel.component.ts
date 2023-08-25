import { Component, Input } from '@angular/core';

import { ProjectItem } from '@elewa-website/models/sections/projects';

@Component({
  selector: 'elewa-website-project-carousel',
  templateUrl: './project-carousel.component.html',
  styleUrls: ['./project-carousel.component.scss'],
})
export class ProjectCarouselComponent {
  /** a list of project items */
  @Input() projectItems!: ProjectItem[];
}
