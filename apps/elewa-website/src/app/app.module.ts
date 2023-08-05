import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { TranslocoRootModule } from './transloco-root.module';
import { FeaturesPagesHomeModule } from '@elewa-website/features/pages/home';
import { ElementsLayoutHeaderModule } from '@elewa-website/elements/layout/header';



@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule,
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
