import {Component} from '@angular/core';

@Component({
  selector: 'app-right-tool-bar',
  templateUrl: './right-tool-bar.component.html',
  styleUrls: ['./right-tool-bar.component.scss']
})
export class RightToolBarComponent {
  test() {
    this.background = "blue"
  }

  pinceau = "pinceau"

  background = "red";

  ToBlue() {
    this.background = "blue";
  }

  ToGreen() {
    this.background = "green"
  }

  ToRed() {
    this.background = "red"
  }

  ToYellow() {
    this.background = "yellow"
  }
}
