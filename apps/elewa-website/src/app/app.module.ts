import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TranslocoRootModule } from './transloco-root.module';

<<<<<<< HEAD
import { ButtonsModule } from '@elewa-website/elements/layout/buttons';
@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule, 
    ButtonsModule   /*configure button module*/ 

  ],
  providers: [
    HttpClientModule,
    TranslocoRootModule
  ],
=======
import { AppRoutingModule } from './app.routing';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [HttpClientModule, TranslocoRootModule],
>>>>>>> main
  bootstrap: [AppComponent],
})
export class AppModule {}
