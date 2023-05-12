import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ShareComponent} from './share/share.component';
import {FormsModule} from "@angular/forms";
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {AlertPopupComponent} from './commons/alert-popup/alert-popup.component';
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {MatIconModule} from "@angular/material/icon";
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './home/home.component';
import { EditorComponent } from './editor/editor.component';
import { ToolbarComponent } from './editor/toolbar/toolbar.component';
import {MatDividerModule} from "@angular/material/divider";
import {MatTooltipModule} from "@angular/material/tooltip";
import {NgxColorsModule} from "ngx-colors";

@NgModule({
    declarations: [
      AppComponent,
      ShareComponent,
      AlertPopupComponent,
      HomeComponent,
      EditorComponent,
      ToolbarComponent,
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MatDialogModule,
      MatFormFieldModule,
      MatInputModule,
      FormsModule,
      MatButtonModule,
      MatButtonToggleModule,
      MatIconModule,
      HttpClientModule,
      MatButtonModule,
      MatDialogModule,
      MatIconModule,
      HttpClientModule,
      MatDividerModule,
      MatTooltipModule,
      NgxColorsModule,
      FormsModule,
    ],
    bootstrap: [AppComponent],
    providers:
[],

})

export class AppModule {
}
