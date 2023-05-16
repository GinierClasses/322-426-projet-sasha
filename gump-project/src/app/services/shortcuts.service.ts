import {Injectable} from '@angular/core';
import {Shortcut} from "../types/shortcut";

@Injectable({
  providedIn: 'root'
})
export class ShortcutsService {

  shortcuts: Shortcut[] = [
    new Shortcut(0, 'Annuler la dernière action', 'Z', true),
    new Shortcut(1, 'Annuler la dernière annulation', 'Y', true),
    new Shortcut(2, 'Déselectionner', 'D', true),
    new Shortcut(3, 'Échanger les couleurs', 'X', false)
  ];

  constructor(
  ) {
  }

  /**
   * Return the shortcuts array
   * @return {Shortcut[]} the shortcuts array
   */
  getShortcuts(): Shortcut[] {
    return this.shortcuts;
  }

}
