import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppHeaderModule } from '@elewa-website/elements/layout/header';
import { TextsModule } from '@elewa-website/elements/layout/texts';
import { BannersModule } from '@elewa-website/elements/banners';
import { ButtonsModule } from '@elewa-website/elements/layout/buttons';
import { MainPageModule } from '@elewa-website/elements/layout/pages/main-page';

import { BookletsPageComponent } from './main/booklets-page/booklets-page.component';
import { BookletsHeroSectionComponent } from './components/booklets-hero-section/booklets-hero-section.component';
import { BookletsAboutSectionOneComponent } from './components/booklets-about-one-section/booklets-about-section.component';

import { BookletsRoutingModule } from './booklets.routing';
import { BookletsAboutTwoSectionComponent } from './components/booklets-about-two-section/booklets-about-two-section.component';

@NgModule({
  imports: [
    CommonModule,
    BookletsRoutingModule,
    AppHeaderModule,
    TextsModule,
    ButtonsModule,
    BannersModule,
    MainPageModule,
  ],
  declarations: [
    BookletsPageComponent,
    BookletsHeroSectionComponent,
    BookletsAboutSectionOneComponent,
    BookletsAboutTwoSectionComponent,
  ],
})
export class BookletsPageModule {}
