import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

export interface AlertDialogData {
  title?: string;
  message?: string;
  type: 'success' | 'error' | 'warning' | 'info';
}

@Component({
  selector: 'app-alert-popup',
  templateUrl: './alert-popup.component.html',
  styleUrls: ['./alert-popup.component.scss']
})
export class AlertPopupComponent {

  constructor(
    public dialogRef: MatDialogRef<AlertPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AlertDialogData,
  ) {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
