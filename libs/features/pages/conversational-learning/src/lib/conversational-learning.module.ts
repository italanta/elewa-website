import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppHeaderModule } from '@elewa-website/elements/layout/header';
import { TextsModule } from '@elewa-website/elements/layout/texts';
import { ButtonsModule } from '@elewa-website/elements/layout/buttons';
import { MainPageModule } from '@elewa-website/elements/layout/pages/main-page';

import { ConversationalLearningRoutingModule } from './conversational-learning-routing.module';

import { ConversationalLearningPageComponent } from './main/conversational-learning-page/conversational-learning-page.component';
import { ConvHeroSectionComponent } from './components/conv-hero-section/conv-hero-section.component';

@NgModule({
  imports: [
    CommonModule,
    ConversationalLearningRoutingModule,
    AppHeaderModule,
    TextsModule,
    ButtonsModule,
    MainPageModule,
  ],
  declarations: [ConversationalLearningPageComponent, ConvHeroSectionComponent],
})
export class ConversationalLearningModule {}
