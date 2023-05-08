import { Component } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent {

  ChangeBackground() {
    this.background =="#721817" ? this.background="#80A1C1" : this.background="#721817";
  }

  background = "white"
}
