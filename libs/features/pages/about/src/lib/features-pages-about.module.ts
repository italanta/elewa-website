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
import { AboutHeroSectionComponent } from './about-hero-section/about-hero-section.component';
import { TextsModule } from '@elewa-website/elements/layout/texts';
import { ImagesModule } from '@elewa-website/elements/layout/images';
import { AppHeaderModule } from '@elewa-website/elements/layout/header';

@NgModule({
  imports: [
    CommonModule,
    CarouselModule,
    CardsModule,
    TranslocoModule,
    MainPageModule,
    AboutRoutingModule,
    TextsModule,
    ImagesModule, 
    AppHeaderModule,/**import modules*/
  ],
  declarations: [
    AboutPageComponent,
    TeamMembersSectionComponent,
    SdgSectionComponent,
    DiscoverSectionComponent,
    AboutHeroSectionComponent,
  ],
  exports: [SdgSectionComponent],
})
export class FeaturesPagesAboutModule {}
