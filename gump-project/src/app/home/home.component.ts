import { Component } from '@angular/core';
import {ShareComponent} from "../share/share.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    private dialog: MatDialog
  ) {
  }


  openShareWindow(): void {
    const dialogRef = this.dialog.open(ShareComponent, {
      width: '100%',
      height: '95%',
      maxHeight: '100%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed : ' + result);
    });
  }

}
