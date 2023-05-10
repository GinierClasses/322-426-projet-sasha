import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

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
      if (currentRoute == '/nouveauFichier') {
        this.isNouveauFichier = true;
      }
      if (currentRoute == '/ouvrir') {
        this.isOuvrir = true;
      }
      if (currentRoute == '/') {
        this.isContent = true;
      }
      if (currentRoute == '/formation') {
        this.isFormation = true;
      }
      if (currentRoute == '/partager') {
        this.isPartager = true;
      }
      if (currentRoute == '/vosFichiers') {
        this.isVosFichiers = true;
      }
      if (currentRoute == '/supprimes') {
        this.isSupprimes = true;
      }
    }
  }

  isCurrentRoute(route: string) {
    return route == this.router.url;
  }


}
