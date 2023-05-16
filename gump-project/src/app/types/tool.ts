export class Tool {
  constructor(
    public id: number,
    public name: string,
    public icon: string,
    public shortcut: string,
    public description: string,
    public selected: boolean,
  ) {
  }
}
