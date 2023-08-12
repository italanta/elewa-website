import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TranslocoRootModule } from './transloco-root.module';
import { ButtonsModule } from '@elewa-website/elements/layout/buttons';

import { AppRoutingModule } from './app.routing';

@NgModule({
  declarations: [AppComponent,],
  imports: [BrowserModule, AppRoutingModule, ButtonsModule ],
  providers: [
    HttpClientModule,
    TranslocoRootModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
