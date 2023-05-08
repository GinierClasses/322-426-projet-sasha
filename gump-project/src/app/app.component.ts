import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ShareComponent} from "./share/share.component";
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import {AlertService} from "./services/alert.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gump-project';
  svgIcons = ['success', 'error', 'warning', 'info', 'instagram', 'linkedin', 'facebook'];
  constructor(
    public dialog: MatDialog,
 //   private alertService: AlertService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
  ) {
    for (const icon of this.svgIcons) {
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

 // test() {
 //   this.alertService.alert('test', 'test', 'info');
 // }

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
  test() {
    this.alertService.alert('test', 'test', 'info');
  }

}
