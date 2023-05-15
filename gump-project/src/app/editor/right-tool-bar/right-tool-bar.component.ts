import {Component,Output,EventEmitter} from '@angular/core';

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
  pinceauBackground="couleur";
  imageBackground = "couleur";
  clipboardBackground="couleur";
  policeBackground="couleur";
  @Output() newEventEmitter = new EventEmitter<string>();

  showImage() {
    this.isPinceau = this.isPinceau ? false : false;
    this.isClipboard = this.isClipboard ? false : false;
    this.isPolice = this.isPolice ? false : false;
    this.isImage = true;
    this.currentMenu = "image";
    this.newEventEmitter.emit(this.imageBackground);
  }

  showClipboard() {
    this.isPinceau = this.isPinceau ? false : false;
    this.isImage = this.isImage ? false : false;
    this.isPolice = this.isPolice ? false : false;
    this.isClipboard = true;
    this.currentMenu = "clipboard";
    this.newEventEmitter.emit(this.clipboardBackground);
  }

  showPolice() {
    this.isPinceau = this.isPinceau ? false : false;
    this.isImage = this.isImage ? false : false;
    this.isClipboard = this.isClipboard ? false : false;
    this.isPolice = true;
    this.currentMenu = "police";
    this.newEventEmitter.emit(this.policeBackground);
  }

  showPinceau() {
    this.isClipboard = this.isClipboard ? false : false;
    this.isImage = this.isImage ? false : false;
    this.isPolice = this.isPolice ? false : false;
    this.isPinceau = true;
    this.currentMenu = "pinceau";
    this.newEventEmitter.emit(this.pinceauBackground);
  }
}
