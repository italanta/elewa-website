import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppHeaderModule } from '@elewa-website/elements/layout/header';
import { TextsModule } from '@elewa-website/elements/layout/texts';
import { ButtonsModule } from '@elewa-website/elements/layout/buttons';
import { BannersModule } from '@elewa-website/elements/banners';
import { MainPageModule } from '@elewa-website/elements/layout/pages/main-page';

import { ContentDevelopmentPageComponent } from './main/content-development-page/content-development-page.component';
import { ContentDevHeroSectionComponent } from './components/content-dev-hero-section/content-dev-hero-section.component';
import { ElewaContentDevAboutOneComponent } from './components/elewa-content-dev-about-one/elewa-content-dev-about-one.component';

import { BannersModule } from '@elewa-website/elements/banners';

import { ContentDevelopmentPageRoutingModule } from './content-development.routing';
import { ElewaContentDevAboutTwoComponent } from './component/elewa-content-dev-about-two/elewa-content-dev-about-two.component';
import { ElewaContentDevAboutOneComponent } from './components/elewa-content-dev-about-one/elewa-content-dev-about-one.component';

@NgModule({
  imports: [
    
    CommonModule,
    
    ContentDevelopmentPageRoutingModule,
    
    AppHeaderModule,
    
    TextsModule,
    
    ButtonsModule,
    BannersModule,
    MainPageModule,
  ,
    ContentDevelopmentPageRoutingModule,
    BannersModule, 
  ],
  declarations: [
    ContentDevelopmentPageComponent,
    ElewaContentDevAboutOneComponent,
    ElewaContentDevAboutTwoComponent,
    ContentDevelopmentPageComponent,
    ContentDevHeroSectionComponent,
    ElewaContentDevAboutOneComponent
  ],
  exports: [ ContentDevelopmentPageComponent, ElewaContentDevAboutOneComponent ],
})
export class ContentDevelopmentModule {}
