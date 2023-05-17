import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'gump-project';
  svgIcons = ['success', 'error', 'warning', 'info', 'instagram', 'linkedin', 'facebook', 'exchange', 'paint', 'image', 'historique', 'police'];
  toolsSvgIcons = ['tool-circle-selection', 'tool-copy', 'tool-eraser', 'tool-fill-bucket', 'tool-gradient', 'tool-lasso-selection', 'tool-magic-wand', 'tool-move', 'tool-move-selection', 'tool-paintbrush', 'tool-pencil', 'tool-pipette', 'tool-rectangle-selection', 'tool-shapes', 'tool-text'];

  constructor(
    public dialog: MatDialog,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
  ) {
    let icons: string[] = [];
    icons.push(...this.svgIcons);
    icons.push(...this.toolsSvgIcons);
    for (let icon of icons) {
      this.matIconRegistry.addSvgIcon(icon,
        this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/" + icon + ".svg")
      );
    }

  }

}
