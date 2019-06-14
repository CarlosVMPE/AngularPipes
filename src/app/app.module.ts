import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from "./app.component";

import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from "@angular/common";
import localeEs from '@angular/common/locales/es';

registerLocaleData(localeEs);

import { CapitalizadoPipe } from "./pipes/capitalizado.pipe";
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { ContraseniaPipe } from './pipes/contrasenia.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    DomseguroPipe,
    ContraseniaPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "es" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
