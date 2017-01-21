import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AppStoreModule} from "../store";
import { ClockComponent } from './clock/clock.component'

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppStoreModule
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
