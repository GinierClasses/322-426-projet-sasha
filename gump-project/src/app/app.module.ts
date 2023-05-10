import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AlertPopupComponent} from './commons/alert-popup/alert-popup.component';
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {MatIconModule} from "@angular/material/icon";
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './home/home.component';
import { EditorComponent } from './editor/editor.component';
import { TopNavbarComponent } from './editor/top-navbar/top-navbar.component';
import {matMenuAnimations, MatMenuModule} from "@angular/material/menu";

@NgModule({
  declarations: [
    AppComponent,
    AlertPopupComponent,
    HomeComponent,
    EditorComponent,
    TopNavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    HttpClientModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
