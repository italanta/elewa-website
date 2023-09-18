import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElewaImageContainerComponent } from './components/elewa-image-container/elewa-image-container.component';
import { StackedSvgComponentComponent } from './components/stacked-svg-component/stacked-svg-component.component';
import { WindowSvgComponentComponent } from './components/window-svg-component/window-svg-component.component';
import { PillSvgComponentComponent } from './components/pill-svg-component/pill-svg-component.component';
import { CardSvgComponentComponent } from './components/card-svg-component/card-svg-component.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ElewaImageContainerComponent,
    StackedSvgComponentComponent,
    WindowSvgComponentComponent,
    PillSvgComponentComponent,
    CardSvgComponentComponent,
  ],
  exports: [ElewaImageContainerComponent],
})
export class ImagesModule {}
