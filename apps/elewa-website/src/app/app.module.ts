import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TranslocoRootModule } from './transloco-root.module';
import { ButtonsModule } from '@elewa-website/elements/layout/buttons';

import { AppRoutingModule } from './app.routing';

@NgModule({
<<<<<<< HEAD
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule],
  providers: [
    HttpClientModule,
    TranslocoRootModule,
    ButtonsModule
  ],
=======
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [HttpClientModule, TranslocoRootModule],
>>>>>>> 84c8344a4d16c0d6cbbb99b94ffde88681c88422
  bootstrap: [AppComponent],
})
export class AppModule {}
