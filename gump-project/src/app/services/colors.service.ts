import { Injectable } from '@angular/core';
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class ColorsService {

  firstColor: string = '#000000';
  secondColor: string = '#ffffff';

  constructor(
    private cookies: CookieService
  ) { }

  /**
   * Get the first color from the cookies or the default value
   * @return {string} the first color
   */
  getFirstColor(): string {
    return this.cookies.get('firstColor') ? this.cookies.get('firstColor') : this.firstColor;
  }

  /**
   * Get the second color
   * @return {string} the second color
   */
  getSecondColor(): string {
    return this.cookies.get('secondColor') ? this.cookies.get('secondColor') : this.secondColor;
  }

  setColors(firstColor: string, secondColor: string): void {
    this.firstColor = firstColor;
    this.secondColor = secondColor;
    this.cookies.set('firstColor', firstColor);
    this.cookies.set('secondColor', secondColor);
  }

}
