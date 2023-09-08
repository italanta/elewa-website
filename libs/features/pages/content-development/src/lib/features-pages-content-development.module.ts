import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppHeaderModule } from '@elewa-website/elements/layout/header';
import { TextsModule } from '@elewa-website/elements/layout/texts';
import { ButtonsModule } from '@elewa-website/elements/layout/buttons';

import { ContentDevelopmentPageComponent } from './main/content-development-page/content-development-page.component';

import { BannersModule } from '@elewa-website/elements/banners';

import { ContentDevelopmentPageRoutingModule } from './content-development.routing';
import { ContentDevHeroSectionComponent } from './components/content-dev-hero-section/content-dev-hero-section.component';
import { ElewaContentDevAboutOneComponent } from './components/elewa-content-dev-about-one/elewa-content-dev-about-one.component';

@NgModule({
  imports: [
    CommonModule, 
    ContentDevelopmentPageRoutingModule, 
    AppHeaderModule, 
    TextsModule, 
    ButtonsModule,
    ContentDevelopmentPageRoutingModule,
    BannersModule, 
  ],
  declarations: [
    ContentDevelopmentPageComponent,
    ContentDevHeroSectionComponent,
    ElewaContentDevAboutOneComponent
  ],
  exports: [ ContentDevelopmentPageComponent, ElewaContentDevAboutOneComponent ],
})
export class ContentDevelopmentModule {}
