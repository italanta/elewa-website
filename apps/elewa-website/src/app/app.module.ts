import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { GoogleTagManagerModule } from 'angular-google-tag-manager';

import { TranslocoRootModule } from './transloco-root.module';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app.routing';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslocoRootModule,
    GoogleTagManagerModule.forRoot({ id: 'GTM-NMCRDT5' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
