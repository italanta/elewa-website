import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextsModule } from '@elewa-website/elements/layout/texts';
import { ButtonsModule } from '@elewa-website/elements/layout/buttons';
import { MainPageModule } from '@elewa-website/elements/layout/pages/main-page';
import { BannersModule } from '@elewa-website/elements/banners';
import { CardsModule } from '@elewa-website/elements/cards';

import { ConversationalLearningPageComponent } from './main/conversational-learning-page/conversational-learning-page.component';
import { ConvHeroSectionComponent } from './components/conv-hero-section/conv-hero-section.component';

import { ConversationalLearningRoutingModule } from './conversational-learning-routing.module';
import { ConvAboutSectionOneComponent } from './components/conv-about-section-one/conv-about-section-one.component';
import { ConvAboutSectionTwoComponent } from './components/conv-about-section-two/conv-about-section-two.component';
import { ConvPricingSectionComponent } from './components/conv-pricing-section/conv-pricing-section.component';
import { ConvProjectsSectionComponent } from './components/conv-projects-section/conv-projects-section.component';

@NgModule({
  imports: [
    CommonModule,
    ConversationalLearningRoutingModule,
    TextsModule,
    ButtonsModule,
    BannersModule,
    CardsModule,
    MainPageModule,
  ],
  declarations: [
    ConversationalLearningPageComponent,
    ConvHeroSectionComponent,
    ConvAboutSectionOneComponent,
    ConvAboutSectionTwoComponent,
    ConvPricingSectionComponent,
    ConvProjectsSectionComponent,
  ],
})
export class ConversationalLearningModule {}
