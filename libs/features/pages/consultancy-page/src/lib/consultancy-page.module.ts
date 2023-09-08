import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BannersModule } from '@elewa-website/elements/banners';
import { MainPageModule } from '@elewa-website/elements/layout/pages/main-page';
import { ElewaConsultancyAboutOneComponent } from './components/elewa-consultancy-about-one/elewa-consultancy-about-one.component';
import { ConsultancyRoutingModule } from './consultancy.routing';
import { ConsultancyPageComponent } from './main/consultancy-page/consultancy-page.component';


@NgModule({
  imports: [CommonModule, ConsultancyRoutingModule, BannersModule, MainPageModule ],
  declarations: [ConsultancyPageComponent, ElewaConsultancyAboutOneComponent],
  exports: [ElewaConsultancyAboutOneComponent],
})
export class ConsultancyPageModule {}
