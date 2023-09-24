import { RadioButtonModule } from 'primeng/radiobutton';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { DockModule } from 'primeng/dock';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NotiflixComponent } from './notiflix/notiflix/notiflix.component';
import { PrimengComponent } from './primeng/primeng.component';


@NgModule({
  declarations: [
    AppComponent,
    NotiflixComponent,
    PrimengComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    DockModule,
    CommonModule,
    FormsModule,
    RadioButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
