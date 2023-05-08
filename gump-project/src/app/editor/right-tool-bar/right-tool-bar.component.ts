import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-right-tool-bar',
  templateUrl: './right-tool-bar.component.html',
  styleUrls: ['./right-tool-bar.component.scss']
})
export class RightToolBarComponent {

  @Output() eventTest = new EventEmitter();

  test() {
    this.background = "#80A1C1"
  }

  background = "#721817";
  IsPinceau = true;
  IsImage = false;
  IsPolice = false;
  IsClipboard = false;
  curentMenu="pinceau";

  ToBlue() {
    this.background = "#80A1C1";
  }

  ToGreen() {
    this.background = "#5B7553"
  }

  ToRed() {
    this.background = "#721817"
  }

  ToYellow() {
    this.background = "#F4E285"
  }

  showImage() {
    this.IsPinceau = this.IsPinceau ? false : false;
    this.IsClipboard = this.IsClipboard ? false : false;
    this.IsPolice = this.IsPolice ? false : false;
    this.IsImage = true;
    this.curentMenu="image";
  }

  showClipboard() {
    this.IsPinceau = this.IsPinceau ? false : false;
    this.IsImage = this.IsImage ? false : false;
    this.IsPolice = this.IsPolice ? false : false;
    this.IsClipboard = true;
    this.curentMenu="clipboard";
  }

  showPolice() {
    this.IsPinceau = this.IsPinceau ? false : false;
    this.IsImage = this.IsImage ? false : false;
    this.IsClipboard = this.IsClipboard ? false : false;
    this.IsPolice = true;
    this.curentMenu="police";
  }

  showPinceau() {
    this.IsClipboard = this.IsClipboard ? false : false;
    this.IsImage = this.IsImage ? false : false;
    this.IsPolice = this.IsPolice ? false : false;
    this.IsPinceau = true;
    this.curentMenu="pinceau";
  }
}
