import {Component} from '@angular/core';
import {AlertService} from "./services/alert.service";
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gump-project';
  svgIcons = ['success', 'error', 'warning', 'info'];
  constructor(
    private alertService: AlertService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
  ) {
    for (let icon of this.svgIcons) {
      this.matIconRegistry.addSvgIcon(icon,
        this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/" + icon + ".svg")
      );
    }
  }

  test() {
    this.alertService.alert('test', 'test', 'info');
  }

}
