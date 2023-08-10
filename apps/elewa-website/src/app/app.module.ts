import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TranslocoRootModule } from './transloco-root.module';
import { FeaturesPagesHomeModule } from '@elewa-website/features/pages/home';
import { ElementsLayoutHeaderModule } from '@elewa-website/elements/layout/header';



import { AppRoutingModule } from './app.routing';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule,AppRoutingModule
    FeaturesPagesHomeModule,
    ElementsLayoutHeaderModule
  ],
  providers: [
    HttpClientModule,
    TranslocoRootModule
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
