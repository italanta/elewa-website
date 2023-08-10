import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CardsModule } from '@elewa-website/elements/cards';
import { AppComponent } from './app.component';
import { TranslocoRootModule } from './transloco-root.module';

import { AppRoutingModule } from './app.routing';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CardsModule],
  providers: [HttpClientModule, TranslocoRootModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
