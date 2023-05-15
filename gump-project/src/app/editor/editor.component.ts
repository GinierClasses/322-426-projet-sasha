import { Component } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent {

  background = "couleur"

  ChangeBackground(event: string) {
    this.background=event;
  }
}
