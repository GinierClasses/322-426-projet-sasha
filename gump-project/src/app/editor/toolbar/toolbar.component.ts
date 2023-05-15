import {Component, OnInit} from '@angular/core';
import {ToolsService} from "../../services/tools.service";
import {Tool} from "../../types/tool";
import {ColorsService} from "../../services/colors.service";
import {ThemePalette} from "@angular/material/core";
import {MatDialog} from "@angular/material/dialog";
import {Shortcut} from "../../types/shortcut";
import {ShortcutsService} from "../../services/shortcuts.service";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  tools: Tool[] = [];
  shortcuts: Shortcut[] = [];

  loading: boolean = true;

  firstColor: string = '#000000';
  secondColor: string = '#ffffff';

  constructor(
    private toolService: ToolsService,
    private shortcutsService: ShortcutsService,
    public colors: ColorsService,
    private dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.tools = this.toolService.getTools();
    this.shortcuts = this.shortcutsService.getShortcuts();
    this.firstColor = this.colors.getFirstColor();
    this.secondColor = this.colors.getSecondColor();
    this.setUpShortcuts();
    this.loading = false;
  }

  setUpShortcuts(): void {
    document.addEventListener('keydown', (e) => {
      let swapColorShortcut: Shortcut | undefined = this.shortcuts.find(shortcut => shortcut.action == 'Échanger les couleurs');
      if (e.key.toLowerCase() == swapColorShortcut?.shortcut.toLowerCase()) {
        this.swapColors();
      }
      this.tools.forEach(tool => {
        if (e.key == tool.shortcut.toLowerCase()) {
          this.selectTool(tool);
        }
      });
    });
  }

  swapColors(): void {
    const tmp = this.firstColor;
    this.firstColor = this.secondColor;
    this.secondColor = tmp;
    this.colors.setColors(this.firstColor, this.secondColor);
  }

  saveColors(): void {
    this.colors.setColors(this.firstColor, this.secondColor);
  }

  selectTool(toolToSelect: Tool): void {
    this.tools.forEach(tool => {
      tool.selected = tool.id === toolToSelect.id;
    });
    this.toolService.setTools(this.tools);
  }

  getToolButtonColor(tool: Tool): ThemePalette {
    return tool.selected ? 'primary' : '' as ThemePalette;
  }

  getColorSwapTooltip(): string {
    let tooltip: string = 'Échanger les couleurs | ';
    let shortcutObject: Shortcut | undefined = this.shortcuts.find(shortcut => shortcut.action == 'Échanger les couleurs');
    if (shortcutObject) {
      tooltip += shortcutObject.shortcut;
    }
    return tooltip;
  }

}
