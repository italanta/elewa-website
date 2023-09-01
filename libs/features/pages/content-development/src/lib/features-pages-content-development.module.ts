import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentDevelopmentPageComponent } from './main/content-development-page/content-development-page.component';

import { ContentDevelopmentPageRoutingModule } from './content-development.routing';
import { TextsModule } from '@elewa-website/elements/layout/texts';
import { AppHeaderModule } from '@elewa-website/elements/layout/header';
import { ButtonsModule } from '@elewa-website/elements/layout/buttons';

@NgModule({
  imports: [CommonModule, ContentDevelopmentPageRoutingModule,TextsModule,AppHeaderModule,ButtonsModule], /**import modules*/
  declarations: [ContentDevelopmentPageComponent],
  exports: [ContentDevelopmentPageComponent]
})
export class ContentDevelopmentModule {}
