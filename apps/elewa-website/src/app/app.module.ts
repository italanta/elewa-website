import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { TranslocoRootModule } from './transloco-root.module';
import { ButtonsModule } from '@elewa-website/elements/layout/buttons';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule],
  providers: [
    HttpClientModule,
    TranslocoRootModule,
    ButtonsModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
