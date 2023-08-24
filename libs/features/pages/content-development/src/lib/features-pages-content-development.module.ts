import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentDevelopmentPageComponent } from './main/content-development-page/content-development-page.component';

import { ContentDevelopmentPageRoutingModule } from './content-development.routing';

@NgModule({
  imports: [CommonModule, ContentDevelopmentPageRoutingModule],
  declarations: [ContentDevelopmentPageComponent],
  exports: [ContentDevelopmentPageComponent]
})
export class ContentDevelopmentModule {}
