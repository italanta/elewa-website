
import { TextsModule } from '@elewa-website/elements/layout/texts';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHeaderModule } from '@elewa-website/elements/layout/header';


import { ConversationalLearningPageComponent } from './main/conversational-learning-page/conversational-learning-page.component';

import { ConversationalLearningRoutingModule } from './conversational-learning-routing.module';
import { ConvHeroSectionComponent } from './component/conv-hero-section./conv-hero-section.component';
import {ButtonsModule} from '@elewa-website/elements/layout/buttons';
@NgModule({
  imports: [CommonModule, ConversationalLearningRoutingModule, AppHeaderModule, TextsModule,ButtonsModule],
  declarations: [ConversationalLearningPageComponent, ConvHeroSectionComponent],
  exports:[ConvHeroSectionComponent]
})
export class ConversationalLearningModule {}
