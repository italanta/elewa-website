import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import the contact page component
 import { ContactPageComponent } from './main/contact-page/contact-page.component';
//import the routing module
 import { ContactRoutingModule } from './contact.routing';
@NgModule({
  imports: [CommonModule,ContactRoutingModule],
  declarations: [ContactPageComponent],
  //exports the contactPageComponent
  exports:[ContactPageComponent],
})
export class FeaturesPagesContactPageModule {}