import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversationalLearningPageComponent } from './main/conversational-learning-page/conversational-learning-page.component';

import { ConversationalLearningRoutingModule } from './conversational-learning-routing.module';
import { ConvHeroSectionComponent } from './component/conv-hero-section./conv-hero-section..component';

@NgModule({
  imports: [CommonModule, ConversationalLearningRoutingModule],
  declarations: [ConversationalLearningPageComponent, ConvHeroSectionComponent],
})
export class ConversationalLearningModule {}
