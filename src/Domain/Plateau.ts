export class Plateau {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  public isWithinBounds(x: number, y: number): boolean {
    return x >= 0 && y >= 0 && x <= this.width && y <= this.height;
  }
}
