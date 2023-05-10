import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isContent = false;
  isFormation = false;
  isSupprimes = false;
  isVosFichiers = false;

  constructor(
    private router: Router
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
      if (currentRoute == '/supprimes') {
        this.isSupprimes = true;
      }
      if (currentRoute == '/vosFichiers') {
        this.isVosFichiers = true;
      }
    }
  }

  isCurrentRoute(route: string) {
    return route == this.router.url;
  }


}
