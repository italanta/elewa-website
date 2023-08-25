import { Component, Input} from '@angular/core';
import { TeamMemberInterface } from '@elewa-website/models/schema/ui/cards';

@Component({
  selector: 'elewa-website-team-member-card',
  templateUrl: './team-member-card.component.html',
  styleUrls: ['./team-member-card.component.scss'],
})
export class TeamMemberCardComponent {

  /**  Pass member property as input in the component */
  @Input() member!: TeamMemberInterface;
}

