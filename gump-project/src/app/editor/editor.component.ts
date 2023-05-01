import { Component } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent {

  ChangeBackground() {
    this.background =="red" ? this.background="blue" : this.background="red";
  }

  background = "white"
}
