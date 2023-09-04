import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslocoModule } from '@ngneat/transloco';

import { CardsModule } from '@elewa-website/elements/cards';
import { ElementsLayoutCarouselModule } from '@elewa-website/elements/layout/carousel';

import { AboutPageComponent } from './main/about-page/about-page.component';

import { AboutRoutingModule } from './about.routing';
import { TeamMembersSectionComponent } from './components/team-members-section/team-members-section.component';
import { AboutHeroSectionComponent } from './components/about-hero-section/about-hero-section.component';

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule,
    ElementsLayoutCarouselModule,
    CardsModule,
    TranslocoModule,
  ],
  declarations: [
    AboutPageComponent,
    TeamMembersSectionComponent,
    AboutHeroSectionComponent,
  ],
})
export class FeaturesPagesAboutModule {}
