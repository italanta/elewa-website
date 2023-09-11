import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextsModule } from '@elewa-website/elements/layout/texts';
import { ButtonsModule } from '@elewa-website/elements/layout/buttons';
import { BannersModule } from '@elewa-website/elements/banners';
import { CardsModule } from '@elewa-website/elements/cards';
import { MainPageModule } from '@elewa-website/elements/layout/pages/main-page';

import { ContentDevelopmentPageComponent } from './main/content-development-page/content-development-page.component';
import { ContentDevHeroSectionComponent } from './components/content-dev-hero-section/content-dev-hero-section.component';
import { ContentDevAboutOneComponent } from './components/elewa-content-dev-about-one/elewa-content-dev-about-one.component';
import { ContentDevAboutTwoComponent } from './components/elewa-content-dev-about-two/elewa-content-dev-about-two.component';
import { ContentDevPricingSectionComponent } from './components/content-dev-pricing-section/content-dev-pricing-section.component';

import { ContentDevPageRoutingModule } from './content-development.routing';

@NgModule({
  imports: [
    CommonModule,
    ContentDevPageRoutingModule,
    TextsModule,
    CardsModule,
    ButtonsModule,
    BannersModule,
    MainPageModule,
  ],
  declarations: [
    ContentDevelopmentPageComponent,
    ContentDevAboutOneComponent,
    ContentDevAboutTwoComponent,
    ContentDevelopmentPageComponent,
    ContentDevHeroSectionComponent,
    ContentDevPricingSectionComponent,
  ],
  exports: [ContentDevelopmentPageComponent],
})
export class ContentDevelopmentModule {}
