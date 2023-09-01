import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversationalLearningPageComponent } from './main/conversational-learning-page/conversational-learning-page.component';

import { ConversationalLearningRoutingModule } from './conversational-learning-routing.module';

@NgModule({
  imports: [CommonModule, ConversationalLearningRoutingModule],
  declarations: [ConversationalLearningPageComponent],
})
export class ConversationalLearningModule {}
