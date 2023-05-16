import {Component} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-page-parametrage',
  templateUrl: './page-parametrage.component.html',
  styleUrls: ['./page-parametrage.component.scss']
})
export class PageParametrageComponent {
  isPortraitSelected: boolean = false;
  isLandscapeSelected: boolean = false;
  backgroundColor: string = '';

  constructor(public dialogRef: MatDialogRef<PageParametrageComponent>) {
  }

  openDialog() {
    this.dialogRef.close(true)
  }

  closeDialog() {
    this.dialogRef.close(false);
  }
}
