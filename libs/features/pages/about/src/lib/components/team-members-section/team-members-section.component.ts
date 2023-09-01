import { Component, Input } from '@angular/core';

@Component({
  selector: 'elewa-website-team-members-section',
  templateUrl: './team-members-section.component.html',
  styleUrls: ['./team-members-section.component.scss'],
})
export class TeamMembersSectionComponent {
  @Input() teamMember!: []

}
