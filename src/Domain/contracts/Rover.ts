export interface IRover {
  rotateLeft(): void;
  rotateRight(): void;
  moveForward(): void;
  getPosition(): { x: number; y: number; orientation: string };
}
