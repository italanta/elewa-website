import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { ContactPageComponent } from './main/contact-page/contact-page.component';

const ELEWA_CONTACT_ROUTES: Route[] = [
  {
    path: '', // The URL path for your page
    component: ContactPageComponent, // The component to display for this route
  },
];

@NgModule({
  imports: [RouterModule.forChild(ELEWA_CONTACT_ROUTES)],
  exports: [RouterModule],
})
export class ContactPageRoutingModule {}
