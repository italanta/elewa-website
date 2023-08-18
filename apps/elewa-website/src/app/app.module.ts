import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TranslocoRootModule } from './transloco-root.module';
import { AppHeaderModule } from '@elewa-website/elements/layout/header';

import { AppRoutingModule } from './app.routing';
import { ButtonsModule } from '@elewa-website/elements/layout/buttons';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslocoRootModule,
    AppHeaderModule,
    ButtonsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
