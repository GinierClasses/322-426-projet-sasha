import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {EditorComponent} from "./editor/editor.component";

const routes: Routes = [
  {
    path: 'new',
    component: HomeComponent
  },
  {
    path: 'open',
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
    path: 'share',
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
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
