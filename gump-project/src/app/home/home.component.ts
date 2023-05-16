import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ShareComponent} from "../share/share.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isNouveauFichier = false;
  isOuvrir = false;
  isContent = false;
  isFormation = false;
  isPartager = false;
  isVosFichiers = false;
  isSupprimes = false;

  constructor(
    private router: Router
  ) {

  }

  ngOnInit() {
    const currentRoute = this.router.url;
    if (currentRoute) {
      if (currentRoute == '/new') {
        this.isNouveauFichier = true;
      }
      if (currentRoute == '/open') {
        this.isOuvrir = true;
      }
      if (currentRoute == '/') {
        this.isContent = true;
      }
      if (currentRoute == '/formation') {
        this.isFormation = true;
      }
      if (currentRoute == '/share') {
        this.isPartager = true;
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
