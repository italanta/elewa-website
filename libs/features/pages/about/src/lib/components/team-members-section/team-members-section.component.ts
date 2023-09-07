import { Component } from '@angular/core';
import { __highlightedTeamMembers } from '@elewa-website/data/sections';

@Component({
  selector: 'elewa-website-team-members-section',
  templateUrl: './team-members-section.component.html',
  styleUrls: ['./team-members-section.component.scss'],
})
export class TeamMembersSectionComponent {
  teamMember = __highlightedTeamMembers;
}
