import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslocoModule } from '@ngneat/transloco';

import { CardsModule } from '@elewa-website/elements/cards';
import { CarouselModule } from '@elewa-website/elements/layout/carousel';
import { MainPageModule } from '@elewa-website/elements/layout/pages/main-page';
import { ImagesModule } from '@elewa-website/elements/layout/images';
import { TextsModule } from '@elewa-website/elements/layout/texts';

import { AboutPageComponent } from './main/about-page/about-page.component';
<<<<<<< HEAD
import { TeamMembersSectionComponent } from './components/team-members-section/team-members-section.component';
=======
>>>>>>> 8aba9427e54db3742dd86f1196054c7cf0497e77
import { SdgSectionComponent } from './components/sdg-section/sdg-section.component';
import { DiscoverSectionComponent } from './components/discover-section/discover-section.component';

import { AboutRoutingModule } from './about.routing';
import { TeamMembersSectionComponent } from './components/team-members-section/team-members-section.component';
import { AboutHeroSectionComponent } from './components/about-hero-section/about-hero-section.component';



@NgModule({
  imports: [
    CommonModule,
    CarouselModule,
    CardsModule,
    TranslocoModule,
    MainPageModule,
    AboutRoutingModule,
    ImagesModule, 
    TextsModule,
    
  ],
<<<<<<< HEAD
  declarations: [AboutPageComponent, TeamMembersSectionComponent, SdgSectionComponent, DiscoverSectionComponent],
=======
  declarations: [
    AboutPageComponent,
    TeamMembersSectionComponent,
    DiscoverSectionComponent,
    AboutHeroSectionComponent,
    SdgSectionComponent,
  ],
>>>>>>> 8aba9427e54db3742dd86f1196054c7cf0497e77
  exports: [SdgSectionComponent]
})
export class FeaturesPagesAboutModule {}
