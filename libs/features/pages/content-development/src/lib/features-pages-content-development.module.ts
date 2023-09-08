import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentDevelopmentPageComponent } from './main/content-development-page/content-development-page.component';

import { BannersModule } from '@elewa-website/elements/banners';

import { ContentDevelopmentPageRoutingModule } from './content-development.routing';
import { ElewaContentDevAboutOneComponent } from './components/elewa-content-dev-about-one/elewa-content-dev-about-one.component';

@NgModule({
  imports: [
    CommonModule, 
    ContentDevelopmentPageRoutingModule,
    BannersModule,
  ],
  declarations: [
    ContentDevelopmentPageComponent,
    ElewaContentDevAboutOneComponent,
  ],
  exports: [ ContentDevelopmentPageComponent, ElewaContentDevAboutOneComponent ],
})
export class ContentDevelopmentModule {}
