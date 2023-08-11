import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TranslocoRootModule } from './transloco-root.module';

import { AppHeaderModule } from '@elewa-website/elements/layout/header';

import { AppRoutingModule } from './app.routing';
import { ToggleMenuDirective } from './toggle-menu.directive';

@NgModule({
  declarations: [AppComponent, ToggleMenuDirective],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslocoRootModule,
    AppHeaderModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
