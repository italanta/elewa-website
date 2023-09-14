import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslocoModule } from '@ngneat/transloco';

import { CardsModule } from '@elewa-website/elements/cards';
import { CarouselModule } from '@elewa-website/elements/layout/carousel';
import { MainPageModule } from '@elewa-website/elements/layout/pages/main-page';
import { ImagesModule } from '@elewa-website/elements/layout/images';
import { TextsModule } from '@elewa-website/elements/layout/texts';

import { AboutPageComponent } from './main/about-page/about-page.component';
import { SdgSectionComponent } from './components/sdg-section/sdg-section.component';
import { DiscoverSectionComponent } from './components/discover-section/discover-section.component';

import { AboutRoutingModule } from './about.routing';
<<<<<<< HEAD
import { AboutHeroSectionComponent } from './components/about-hero-section/about-hero-section.component';
import { TextsModule } from '@elewa-website/elements/layout/texts';
import { ImagesModule } from '@elewa-website/elements/layout/images';
=======
import { TeamMembersSectionComponent } from './components/team-members-section/team-members-section.component';
import { AboutHeroSectionComponent } from './components/about-hero-section/about-hero-section.component';


>>>>>>> b580ec0a7e2d82f3ac92a31485816a0f30a0f53b

@NgModule({
  imports: [
    CommonModule,
    CarouselModule,
    CardsModule,
    TranslocoModule,
    MainPageModule,
    AboutRoutingModule,
<<<<<<< HEAD
    TextsModule,
    ImagesModule
  ],
  declarations: [
    AboutPageComponent,
    TeamMembersSectionComponent,
    SdgSectionComponent,
    DiscoverSectionComponent,
    AboutHeroSectionComponent,
  ],
  exports: [SdgSectionComponent, AboutHeroSectionComponent],
=======
    ImagesModule, 
    TextsModule,
    
  ],
  declarations: [
    AboutPageComponent,
    TeamMembersSectionComponent,
    DiscoverSectionComponent,
    AboutHeroSectionComponent,
    SdgSectionComponent,
  ],
  exports: [SdgSectionComponent]
>>>>>>> b580ec0a7e2d82f3ac92a31485816a0f30a0f53b
})
export class FeaturesPagesAboutModule {}
