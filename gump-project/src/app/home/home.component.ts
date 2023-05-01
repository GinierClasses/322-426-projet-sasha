import { Component } from '@angular/core';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
/**
 * @title Dynamic grid-list
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  tiles: Tile[] = [
  {text: 'Test1', cols: 1, rows: 1, color: 'lightblue'},
  {text: 'Test2', cols: 4, rows: 9, color: 'lightgreen'},
  {text: 'Test3', cols: 1, rows: 1, color: 'lightblue'},
  {text: 'Test4', cols: 1, rows: 1, color: 'lightblue'},
  {text: 'Test5', cols: 1, rows: 1, color: 'lightblue'},
  {text: 'Test6', cols: 1, rows: 1, color: 'lightblue'},
  {text: 'Test7', cols: 1, rows: 1, color: 'lightblue'},
  {text: 'Test8', cols: 1, rows: 1, color: 'lightblue'},
  {text: 'Test9', cols: 1, rows: 1, color: 'lightblue'},
  {text: 'Test10', cols: 1, rows: 1, color: 'lightblue'},


    /**
   {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
   {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
   {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
   {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
   */
];}


