import { Component, Input } from '@angular/core';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { ProjectItem } from 'libs/models/sections/projects/project-item.interface';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { __highlightedProjects } from 'libs/data/sections/highlighted-projects.data'

@Component({
  selector: 'elewa-website-elewa-project-item-card',
  templateUrl: './elewa-project-item-card.component.html',
  styleUrls: ['./elewa-project-item-card.component.scss'],
})

/* A card that displays an image and its description based on
the values passed to the card. The card should be reusable */
export class ElewaProjectItemCardComponent {
  /** Card info to be passed in */
  @Input() project: ProjectItem = {
    title: '',
    description: '',
    tag: '',
    imgSrc: ''
  };

  // incorporate the mock projects data
  highlightedProjects: ProjectItem[] = __highlightedProjects;
}
