import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextsModule } from '@elewa-website/elements/layout/texts';
import { BannersModule } from '@elewa-website/elements/banners';
import { ButtonsModule } from '@elewa-website/elements/layout/buttons';
import { MainPageModule } from '@elewa-website/elements/layout/pages/main-page';
import { CardsModule } from '@elewa-website/elements/cards';

import { BookletsPageComponent } from './main/booklets-page/booklets-page.component';
import { BookletsHeroSectionComponent } from './components/booklets-hero-section/booklets-hero-section.component';
import { BookletsAboutSectionOneComponent } from './components/booklets-about-one-section/booklets-about-section.component';
import { BookletsAboutTwoSectionComponent } from './components/booklets-about-two-section/booklets-about-two-section.component';
import { BookletsPricingListSectionComponent } from './components/booklets-pricing-list-section/booklets-pricing-list-section.component';

import { BookletsRoutingModule } from './booklets.routing';

@NgModule({
  imports: [
    CommonModule,
    BookletsRoutingModule,
    TextsModule,
    ButtonsModule,
    BannersModule,
    CardsModule,
    MainPageModule,
  ],
  declarations: [
    BookletsPageComponent,
    BookletsHeroSectionComponent,
    BookletsAboutSectionOneComponent,
    BookletsAboutTwoSectionComponent,
    BookletsPricingListSectionComponent,
  ],
})
export class BookletsPageModule {}
