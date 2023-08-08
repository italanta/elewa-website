import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TranslocoRootModule } from './transloco-root.module';

import { AppRoutingModule } from './app.routing';
import { ElementsLayoutImagesModule } from '@elewa-website/elements/layout/images';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ElementsLayoutImagesModule],
  providers: [HttpClientModule, TranslocoRootModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
