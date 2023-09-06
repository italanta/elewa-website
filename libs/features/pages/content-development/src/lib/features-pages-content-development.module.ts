import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentDevelopmentPageComponent } from './main/content-development-page/content-development-page.component';

import { ContentDevelopmentPageRoutingModule } from './content-development.routing';
import { ElewaContentDevAboutTwoComponent } from './components/elewa-content-dev-about-two/elewa-content-dev-about-two.component';

@NgModule({
  imports: [CommonModule, ContentDevelopmentPageRoutingModule],
  declarations: [
    ContentDevelopmentPageComponent,
    ElewaContentDevAboutTwoComponent,
  ],
  exports: [ContentDevelopmentPageComponent],
})
export class ContentDevelopmentModule {}
