import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.scss']
})
export class TopNavbarComponent {
  folderMenuItems = [{icon: 'add_a_photo', label: 'Nouvelle image'},
    {icon: 'insert_drive_file', label: 'Ouvrir...'},
    {icon: 'access_time', label: 'Récemment ouvert'},
    {icon: 'save', label: 'Enregistrer'},
    {icon: 'save_alt', label: 'Enregistrer sous...'},
    {icon: 'history', label: 'Rétablir'},
    {icon: 'import_export', label: 'Exporter'},
    {icon: 'print', label: 'Imprimer'}];
  editionMenuItems = [
    {icon: 'cancel', label: 'Annuler'},
    {icon: 'redo', label: 'Rétablir'},
    {icon: 'access_time', label: 'Historique d\'annulation'},
    {icon: 'content_cut', label: 'Couper'},
    {icon: 'content_copy', label: 'Copier'},
    {icon: 'content_paste', label: 'Coller'},
    {icon: 'file_copy', label: 'Presse-papiers...'},
    {icon: 'delete', label: 'Effacer'},
    {icon: 'border_clear', label: 'Remplir le contour de la sélection'}
  ];
  viewMenuItems = [
    {icon: 'search', label: 'Zoom'},
    {icon: 'flip', label: 'Miroir et rotation'},
    {icon: 'crop_free', label: 'Centrer l\'image dans la fenêtre'},
    {icon: 'zoom_out_map', label: 'Ajuster la fenêtre à l\'image'},
    {icon: 'fullscreen', label: 'Plein écran'},
    {icon: 'Filter', label: 'Filtres d\'affichage...'},
    {icon: 'colorize', label: 'Gestion des couleurs'},
    {icon: 'grid_on', label: 'Afficher les guides'},
    {icon: 'grid_on', label: 'Afficher la grille'},
    {icon: 'import_export', label: 'Afficher les points d\'échantillonnage'},
    {icon: 'import_export', label: 'Aligner sur la grille'},
    {icon: 'import_export', label: 'Aligner sur les bords du canevas'},
  ];
  constructor(private router: Router) {}

  navigateToHome() {
    this.router.navigateByUrl('/home')
      .then(() => {
        console.log('Page home trouvée');
      })
      .catch((error) => {
        console.error('Page home non trouvée', error);
      });
  }

  navigateToTutorial() {
    this.router.navigateByUrl('/tutorial')
      .then(() => {
        console.log('Page tutoriel trouvée');
      })
      .catch((error) => {
        console.error('Page tutoriel non trouvée', error);
      });
  }

  navigateToParameters() {
    this.router.navigateByUrl('/parameters')
      .then(() => {
        console.log('Page de paramètres trouvée');
      })
      .catch((error) => {
        console.error('Page de paramètres non trouvée', error);
      });
  }

  selectedButton: string | null = null;

  selectButton(buttonName: string) {
    this.selectedButton = buttonName;
  }

  menuOpened(buttonName: string) {
    this.selectedButton = buttonName;
  }

  menuClosed() {
    this.selectedButton = null;
  }

  clickNoMenuButton(buttonName: string) {
    this.selectedButton = buttonName;
    setTimeout(() => {
      this.selectedButton = null;
    }, 100);
  }
}
