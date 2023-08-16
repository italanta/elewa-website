import { Component, Input } from '@angular/core';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { ProjectItem } from '@elewa-website/models/sections/projects';

@Component({
  selector: 'elewa-website-elewa-project-item-card',
  templateUrl: './elewa-project-item-card.component.html',
  styleUrls: ['./elewa-project-item-card.component.scss'],
})

export class ElewaProjectItemCardComponent {
  /** Use the '!' to determine whether there is data to be put in. */
  @Input() project!: ProjectItem;
}
