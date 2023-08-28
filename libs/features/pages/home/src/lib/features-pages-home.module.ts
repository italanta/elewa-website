import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElewaTextContentItemComponent } from 'libs/elements/layout/texts/src/lib/elewa-text-content-item/elewa-text-content-item.component';
import { HomePageComponent } from './main/home/home-page.component';
import { ElementsLayoutTextsModule } from '../../../../../elements/layout/texts/src/lib/elements-layout-texts.module';
import { HomeRoutingModule } from './home.routing';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, ElementsLayoutTextsModule],
  declarations: [ElewaTextContentItemComponent, HomePageComponent],
  exports: [HomePageComponent],
})
export class FeaturesPagesHomeModule {}
