// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { ProjectItem } from './../../../../../../models/schema/ui/cards/src/lib/project-item.interface';
import { Component, Input } from '@angular/core';
// import { Component, Input } from '@angular/core';



@Component({
  selector: 'elewa-website-elewa-project-item-card',
  templateUrl: './elewa-project-item-card.component.html',
  styleUrls: ['./elewa-project-item-card.component.scss'],
})
export class ElewaProjectItemCardComponent {
  @Input() projectCard!: ProjectItem;
}
