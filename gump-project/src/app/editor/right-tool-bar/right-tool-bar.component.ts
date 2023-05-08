import {Component} from '@angular/core';

@Component({
  selector: 'app-right-tool-bar',
  templateUrl: './right-tool-bar.component.html',
  styleUrls: ['./right-tool-bar.component.scss']
})
export class RightToolBarComponent {

  isPinceau = true;
  isImage = false;
  isPolice = false;
  isClipboard = false;
  currentMenu = "pinceau";

  showImage() {
    this.isPinceau = this.isPinceau ? false : false;
    this.isClipboard = this.isClipboard ? false : false;
    this.isPolice = this.isPolice ? false : false;
    this.isImage = true;
    this.currentMenu = "image";
  }

  showClipboard() {
    this.isPinceau = this.isPinceau ? false : false;
    this.isImage = this.isImage ? false : false;
    this.isPolice = this.isPolice ? false : false;
    this.isClipboard = true;
    this.currentMenu = "clipboard";
  }

  showPolice() {
    this.isPinceau = this.isPinceau ? false : false;
    this.isImage = this.isImage ? false : false;
    this.isClipboard = this.isClipboard ? false : false;
    this.isPolice = true;
    this.currentMenu = "police";
  }

  showPinceau() {
    this.isClipboard = this.isClipboard ? false : false;
    this.isImage = this.isImage ? false : false;
    this.isPolice = this.isPolice ? false : false;
    this.isPinceau = true;
    this.currentMenu = "pinceau";
  }
}
