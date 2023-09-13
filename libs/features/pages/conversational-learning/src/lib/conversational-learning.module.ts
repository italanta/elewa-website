import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextsModule } from '@elewa-website/elements/layout/texts';
import { ButtonsModule } from '@elewa-website/elements/layout/buttons';
import { MainPageModule } from '@elewa-website/elements/layout/pages/main-page';
import { BannersModule } from '@elewa-website/elements/banners';

import { ConversationalLearningPageComponent } from './main/conversational-learning-page/conversational-learning-page.component';
import { ConvHeroSectionComponent } from './components/conv-hero-section/conv-hero-section.component';
import { ConvAboutSectionOneComponent } from './components/conv-about-section-one/conv-about-section-one.component';
import { ConvAboutSectionTwoComponent } from './components/conv-about-section-two/conv-about-section-two.component';

import { ConversationalLearningRoutingModule } from './conversational-learning-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ConversationalLearningRoutingModule,
    TextsModule,
    ButtonsModule,
    BannersModule,
    MainPageModule,
  ],
  declarations: [
    ConversationalLearningPageComponent,
    ConvHeroSectionComponent,
    ConvAboutSectionOneComponent,
    ConvAboutSectionTwoComponent,
  ],
})
export class ConversationalLearningModule {}
