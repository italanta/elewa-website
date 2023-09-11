import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppHeaderModule } from '@elewa-website/elements/layout/header';
import { TextsModule } from '@elewa-website/elements/layout/texts';
import { ButtonsModule } from '@elewa-website/elements/layout/buttons';
import { MainPageModule } from '@elewa-website/elements/layout/pages/main-page';

import { ContentDevelopmentPageComponent } from './main/content-development-page/content-development-page.component';
import { ContentDevHeroSectionComponent } from './components/content-dev-hero-section/content-dev-hero-section.component';

import { ContentDevelopmentPageRoutingModule } from './content-development.routing';

@NgModule({
  imports: [
    CommonModule,
    ContentDevelopmentPageRoutingModule,
    AppHeaderModule,
    TextsModule,
    ButtonsModule,
    MainPageModule,
  ],
  declarations: [
    ContentDevelopmentPageComponent,
    ContentDevHeroSectionComponent,
  ],
  exports: [ContentDevelopmentPageComponent],
})
export class ContentDevelopmentModule {}
