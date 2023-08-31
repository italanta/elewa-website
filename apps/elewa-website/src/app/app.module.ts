import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TranslocoRootModule } from './transloco-root.module';

import { AppRoutingModule } from './app.routing';
import { ElementsLayoutFooterModule } from '@elewa-website/elements/layout/footer';



@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ElementsLayoutFooterModule],
  providers: [HttpClientModule, TranslocoRootModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
