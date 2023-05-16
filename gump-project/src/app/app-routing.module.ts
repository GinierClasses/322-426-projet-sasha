import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {EditorComponent} from "./editor/editor.component";

const routes: Routes = [
  {
    path: 'open',
    redirectTo: 'editor'
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
    path: 'files',
    component: HomeComponent
  },
  {
    path: 'deleted',
    component: HomeComponent
  },
  {
    path: 'editor',
    component: EditorComponent,
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
