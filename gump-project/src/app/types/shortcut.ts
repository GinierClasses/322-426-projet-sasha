export class Shortcut {
  constructor(
    public id: number,
    public action: string,
    public shortcut: string,
    public isCtrl: boolean,
  ) {
  }
}
