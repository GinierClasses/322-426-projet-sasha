import {Injectable} from '@angular/core';
import {Shortcut} from "../types/shortcut";
import {CookieService} from "ngx-cookie-service";

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
    private cookies: CookieService
  ) {
  }

  /**
   * Return the shortcuts array
   * @return {Shortcut[]} the shortcuts array
   */
  getShortcuts(): Shortcut[] {
    return this.cookies.get('shortcuts') ? JSON.parse(this.cookies.get('shortcuts')) : this.shortcuts;
  }

  /**
   * Set the shortcuts array
   * @param shortcuts the shortcuts array
   */
  setShortcuts(shortcuts: Shortcut[]) {
    this.shortcuts = shortcuts;
    this.cookies.set('shortcuts', JSON.stringify(this.shortcuts));
  }

}
