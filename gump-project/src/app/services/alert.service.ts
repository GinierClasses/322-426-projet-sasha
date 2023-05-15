import { Injectable } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AlertPopupComponent} from "../commons/alert-popup/alert-popup.component";

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
    private dialog: MatDialog
  ) { }

  alert(title: string, message: string, type: 'success' | 'error' | 'warning' | 'info') {
    const dialogRef = this.dialog.open(AlertPopupComponent, {
      width: '40%',
      data: {
        title: title,
        message: message,
        type: type,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.info(result);
    });
  }

}
