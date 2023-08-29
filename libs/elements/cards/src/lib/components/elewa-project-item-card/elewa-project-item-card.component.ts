import { Component, Input } from '@angular/core';

import { ProjectItem } from '@elewa-website/models/sections/projects';

@Component({
  selector: 'elewa-website-project-item-card',
  templateUrl: './elewa-project-item-card.component.html',
  styleUrls: ['./elewa-project-item-card.component.scss'],
})
export class ElewaProjectItemCardComponent {
  /** input project of type @interface ProjectItem */
  @Input() project!: ProjectItem;
}
