import {Component, OnDestroy, OnInit} from '@angular/core';
import {ToolsService} from "../../services/tools.service";
import {Tool} from "../../types/tool";
import {ColorsService} from "../../services/colors.service";
import {ThemePalette} from "@angular/material/core";
import {MatDialog} from "@angular/material/dialog";
import {ColorPickerComponent} from "../../commons/color-picker/color-picker.component";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  tools: Tool[] = [];

  loading: boolean = true;

  firstColor: string = '#000000';
  secondColor: string = '#ffffff';

  constructor(
    private toolService: ToolsService,
    public colors: ColorsService,
    private dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.tools = this.toolService.getTools();
    this.firstColor = this.colors.getFirstColor();
    this.secondColor = this.colors.getSecondColor();
    this.setUpShortcuts();
    this.loading = false;
  }

  setUpShortcuts(): void {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'x') {
        this.switchColors();
      }
      this.tools.forEach(tool => {
        if (e.key == tool.shortcut.toLowerCase()) {
          this.selectTool(tool);
        }
      });
    });
  }

  switchColors(): void {
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
    let tooltip = `Swap colors | `;
    let shortcut = 'X';
    return tooltip + shortcut;
  }

}
