// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { ProjectItem } from '@elewa-website/models/schema/ui/cards';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'elewa-website-elewa-project-item-card',
  templateUrl: './elewa-project-item-card.component.html',
  styleUrls: ['./elewa-project-item-card.component.scss'],
})

export class ElewaProjectItemCardComponent {
  @Input() projectCard!: ProjectItem;
}
