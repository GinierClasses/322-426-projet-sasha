import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

export interface ColorPickerData {
  color: string;
}

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ColorPickerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ColorPickerData,
  ) {
  }

  color: string = '#000000';

  ngOnInit(): void {

    console.log(this.data)
    console.log(this.color)
    this.color = this.data.color;

  }

}
