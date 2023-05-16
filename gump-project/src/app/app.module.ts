import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PageParametrageComponent} from './page-parametrage/page-parametrage.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {NgxColorsModule} from 'ngx-colors';
import {ShareComponent} from './share/share.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {HttpClientModule} from "@angular/common/http";
import {HomeComponent } from './home/home.component';
import {MatToolbarModule } from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatListModule} from "@angular/material/list";
import { HomeContentComponent } from './home/home-content/home-content.component';
import { HomeFormationComponent } from './home/home-formation/home-formation.component';
import { HomeVosFichiersComponent } from './home/home-vos-fichiers/home-vos-fichiers.component';
import { HomeSupprimesComponent } from './home/home-supprimes/home-supprimes.component';
import {EditorComponent} from './editor/editor.component';
import {TopNavbarComponent} from './editor/top-navbar/top-navbar.component';
import {MatMenuModule} from "@angular/material/menu";
import {RightToolBarComponent} from './editor/right-tool-bar/right-tool-bar.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {NgOptimizedImage} from "@angular/common";
import {ToolbarComponent} from './editor/toolbar/toolbar.component';
import {MatTooltipModule} from "@angular/material/tooltip";

@NgModule({
  declarations: [
    AppComponent,
    PageParametrageComponent,
    HomeComponent,
    HomeContentComponent,
    HomeFormationComponent,
    HomeVosFichiersComponent,
    HomeSupprimesComponent,
    EditorComponent,
    TopNavbarComponent,
    RightToolBarComponent,
    ShareComponent,
    ToolbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatGridListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatDialogModule,
    MatSelectModule,
    NgxColorsModule,
    HttpClientModule,
    MatSidenavModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatMenuModule,
    MatExpansionModule,
    NgOptimizedImage,
    MatButtonToggleModule,
    MatTooltipModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}

