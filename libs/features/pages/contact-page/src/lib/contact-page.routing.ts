import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { ContactPageComponent } from './main/contact-page/contact-page.component';

export const ELEWA_CONTACT_ROUTES: Route[] = [
    
    { path: 'contact', component: ContactPageComponent },

];

@NgModule({
    imports: [RouterModule.forChild(ELEWA_CONTACT_ROUTES)],
    exports: [RouterModule]
})
export class ContactRoutingModule { }
