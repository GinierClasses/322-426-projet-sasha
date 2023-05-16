import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ShareComponent} from "../share/share.component";
import {MatDialog} from "@angular/material/dialog";
import {PageParametrageComponent} from "../page-parametrage/page-parametrage.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isContent = false;
  isFormation = false;
  isVosFichiers = false;
  isSupprimes = false;

  constructor(
    private router: Router,
    private dialog: MatDialog
  ) {

  }

  ngOnInit() {
    const currentRoute = this.router.url;
    if (currentRoute) {
      if (currentRoute == '/') {
        this.isContent = true;
      }
      if (currentRoute == '/formation') {
        this.isFormation = true;
      }
      if (currentRoute == '/files') {
        this.isVosFichiers = true;
      }
      if (currentRoute == '/deleted') {
        this.isSupprimes = true;
      }
    }
  }

  isCurrentRoute(route: string) {
    return route == this.router.url;
  }

  openShareWindow(): void {

    const dialogRef = this.dialog.open(ShareComponent, {
      width: '100%',
      height: '95%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed : ' + result);
      this.router.navigate(['/']);
    });
  }

  openSettingsWindow(): void {

    const dialogRef = this.dialog.open(PageParametrageComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.router.navigate(['/editor'])
      } else {
        this.router.navigate(['/'])
      }
    });

  }

}
