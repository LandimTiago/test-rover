import { ICommands } from "../../Domain/contracts/Commands";
import { Plateau } from "../../Domain/models/Plateau";
import { Rover } from "../../Domain/models/Rover";

export class MoveRoverCommand implements ICommands {
  private rover: Rover;
  private plateau: Plateau;

  constructor(rover: Rover, plateau: Plateau) {
    this.rover = rover;
    this.plateau = plateau;
  }

  public execute(instructions: string): {
    x: number;
    y: number;
    orientation: string;
  } {
    const { rover, plateau } = this;

    const commands: Record<string, () => void> = {
      L: () => rover.rotateLeft(),
      R: () => rover.rotateRight(),
      M: () => {
        rover.moveForward();
        const { x, y } = rover.getPosition();
        if (!plateau.isWithinBounds(x, y)) {
          throw new Error(`Rover tentou sair do plateau em (${x}, ${y})`);
        }
      },
    };

    for (const instruction of instructions) {
      const command = commands[instruction];
      if (!command) {
        throw new Error(`Instrução inválida: ${instruction}`);
      }
      command();
    }

    return rover.getPosition();
  }
}
