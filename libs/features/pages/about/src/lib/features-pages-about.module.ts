import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutPageComponent } from './main/about-page/about-page.component';

import { AboutRoutingModule } from './about.routing';
import { TeamMembersSectionComponent } from './components/team-members-section/team-members-section.component';

@NgModule({
  imports: [CommonModule, AboutRoutingModule],
  declarations: [AboutPageComponent, TeamMembersSectionComponent],
})
export class FeaturesPagesAboutModule {}
