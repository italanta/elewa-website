import { Component, Input } from '@angular/core';

import { ProjectItem } from '@elewa-website/models/sections/projects';

@Component({
  selector: 'elewa-website-projects-list-carousel',
  templateUrl: './projects-list-carousel.component.html',
  styleUrls: ['./projects-list-carousel.component.scss'],
})
export class ProjectsListCarouselComponent {
  @Input({ required: true }) projectsList!: ProjectItem[];
}
