import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TranslocoRootModule } from './transloco-root.module';
import { AppHeaderModule } from '@elewa-website/elements/layout/header';
import  {FeaturesPagesContactPageModule } from '@elewa-website/features/pages/contact-page/contact-page-module';
import { AppRoutingModule } from './app.routing';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslocoRootModule,
    AppHeaderModule,
    FeaturesPagesContactPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
