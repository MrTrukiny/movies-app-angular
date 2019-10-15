import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/layout/header/navbar/navbar.component';
import { MaterialModule } from './material/material.module';
import { MoviesListComponent } from './components/movies/movies-list/movies-list.component';
import { HomeComponent } from './components/layout/main/home/home.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, MoviesListComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
