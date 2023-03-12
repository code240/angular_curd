import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { AppRoutingModule } from './app-routing.module'; // CLI imports AppRoutingModule
import { AppComponent } from './app.component';
import { Error404Component } from './Views/error404/error404.component';
import { FetchComponent } from './Views/fetch/fetch.component';
import {HttpClientModule} from '@angular/common/http';
import { AddComponent } from './Views/add/add.component';
import { FormsModule } from '@angular/forms';
import { UpdateComponent } from './Views/update/update.component';
import { ViewUserComponent } from './Views/view-user/view-user.component';

@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    FetchComponent,
    AddComponent,
    UpdateComponent,
    ViewUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // CLI adds AppRoutingModule to the AppModule's imports array
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }