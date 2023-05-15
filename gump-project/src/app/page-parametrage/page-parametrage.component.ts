import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
selector: 'app-page-parametrage',
templateUrl: './page-parametrage.component.html',
styleUrls: ['./page-parametrage.component.scss']
})
export class PageParametrageComponent {
isPortraitSelected: boolean = false;
isLandscapeSelected: boolean = false;
firstColor: string = ''; // Ajout de la propriété firstColor

constructor(public dialogRef: MatDialogRef<PageParametrageComponent>) {}

saveColors() {
// Logique pour sauvegarder les couleurs
}

openDialog() {
// Logique pour ouvrir le document
// ...
}

closeDialog() {
this.dialogRef.close();
}
}