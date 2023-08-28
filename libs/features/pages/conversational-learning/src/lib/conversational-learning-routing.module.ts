import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConversationalLearningPageComponent } from './main/conversational-learning-page/conversational-learning-page.component'; 

const routes: Routes = [
  {
    path: '',
    component: ConversationalLearningPageComponent,
  },
  // Define more child routes if needed
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConversationalLearningRoutingModule {}
