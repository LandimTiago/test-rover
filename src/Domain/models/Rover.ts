type Direction = "N" | "E" | "S" | "W";

export class Rover {
  private x: number;
  private y: number;
  private orientation: Direction;

  constructor(x: number, y: number, orientation: Direction) {
    this.x = x;
    this.y = y;
    this.orientation = orientation;
  }

  public getPosition(): { x: number; y: number; orientation: Direction } {
    return { x: this.x, y: this.y, orientation: this.orientation };
  }

  public rotateLeft(): void {
    const directions: Direction[] = ["N", "W", "S", "E"];
    const currentIndex = directions.indexOf(this.orientation);
    this.orientation = directions[(currentIndex + 1) % 4];
  }

  public rotateRight(): void {
    const directions: Direction[] = ["N", "E", "S", "W"];
    const currentIndex = directions.indexOf(this.orientation);
    this.orientation = directions[(currentIndex + 1) % 4];
  }

  public moveForward(): void {
    switch (this.orientation) {
      case "N":
        this.y += 1;
        break;
      case "E":
        this.x += 1;
        break;
      case "S":
        this.y -= 1;
        break;
      case "W":
        this.x -= 1;
        break;
    }
  }
}
