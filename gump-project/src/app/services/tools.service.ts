import {Injectable} from '@angular/core';
import {Tool} from "../types/tool";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  // tools : selection rectangle, selection cercle, selection lasso, selection magique, déplacement, déplacement de la sélection, pipette, remplissage, pinceau, crayon, formes, texte, dégradé, gomme, dupliquer
  tools: Tool[] = [
    new Tool(0, 'Sélection rectangle', 'tool-rectangle-selection', 'R', 'Sélectionner une zone rectangulaire', true),
    new Tool(1, 'Sélection cercle', 'tool-circle-selection', 'C', 'Sélectionner une zone circulaire', false),
    new Tool(2, 'Sélection lasso', 'tool-lasso-selection', 'L', 'Sélectionner une zone libre', false),
    new Tool(3, 'Sélection magique', 'tool-magic-wand', 'W', 'Sélectionner une zone par couleur', false),
    new Tool(4, 'Déplacement', 'tool-move', 'V', 'Déplacement de la zone de travail', false),
    new Tool(5, 'Déplacement de la sélection', 'tool-move-selection', 'M', 'Déplacement de la sélection', false),
    new Tool(6, 'Pipette', 'tool-pipette', 'I', 'Prélever une couleur', false),
    new Tool(7, 'Remplissage', 'tool-fill-bucket', 'F', 'Remplir une zone', false),
    new Tool(8, 'Pinceau', 'tool-paintbrush', 'B', 'Dessiner avec un pinceau', false),
    new Tool(9, 'Crayon', 'tool-pencil', 'P', 'Dessiner avec un crayon (pixel)', false),
    new Tool(10, 'Gomme', 'tool-eraser', 'E', 'Effacer des pixels', false),
    new Tool(11, 'Dégradé', 'tool-gradient', 'G', 'Appliquer un dégradé de couleurs', false),
    new Tool(12, 'Formes', 'tool-shapes', 'O', 'Dessiner des formes géométriques', false),
    new Tool(13, 'Texte', 'tool-text', 'T', 'Insérer du texte', false),
    new Tool(14, 'Dupliquer', 'tool-copy', 'D', 'Dupliquer la sélection', false),
  ];

  constructor(
    private cookies: CookieService
  ) {
  }

  /**
   * Return the tools array
   * @return {Tool[]} the tools array
   */
  getTools(): Tool[] {
    return this.cookies.get('tools') ? JSON.parse(this.cookies.get('tools')) : this.tools;
  }

  /**
   * Set the tools array
   * @param tools the tools array
   */
  setTools(tools: Tool[]) {
    this.tools = tools;
    this.cookies.set('tools', JSON.stringify(this.tools));
  }

}
