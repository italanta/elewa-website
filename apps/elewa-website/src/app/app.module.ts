import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TranslocoRootModule } from './transloco-root.module';

import { AppRoutingModule } from './app.routing';
import { CardsModule } from '@elewa-website/elements/cards';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CardsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslocoRootModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
