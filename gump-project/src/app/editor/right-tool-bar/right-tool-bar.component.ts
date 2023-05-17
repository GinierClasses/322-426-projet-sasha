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
  pinceauBackground="#ff7373";
  imageBackground = "#f6f6a9";
  clipboardBackground="#87ff91";
  policeBackground="#8383f8";
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

  getCurrentMenuDisplayName(): string {
    switch (this.currentMenu) {
      case "pinceau":
        return "Pinceaux";
      case "image":
        return "Calques";
      case "clipboard":
        return "Clipboard";
      case "police":
        return "Polices";
      default:
        return "";
    }
  }

}
