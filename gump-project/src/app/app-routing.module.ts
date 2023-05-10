import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {
    path: 'nouveauFichier',
    component: HomeComponent
  },
  {
    path: 'ouvrir',
    component: HomeComponent
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'formation',
    component: HomeComponent
  },
  {
    path: 'partager',
    component: HomeComponent
  },
  {
    path: 'vosFichiers',
    component: HomeComponent
  },
  {
    path: 'supprimes',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
