import { Component, Input } from '@angular/core';

import { TeamMember } from '@elewa-website/models/schema/ui/cards';
@Component({
  selector: 'elewa-website-team-member-card',
  templateUrl: './team-member-card.component.html',
  styleUrls: ['./team-member-card.component.scss'],
})
export class TeamMemberCardComponent {
    /** input teamMemberData of type @interface TeamMember */

  @Input() teamMemberData!: TeamMember;
}
