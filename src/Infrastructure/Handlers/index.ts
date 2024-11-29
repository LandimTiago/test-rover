import { MoveRoverCommand } from "../../Application/useCases/moveRoverCommand";
import { Rover } from "../../Domain/models/Rover";
import { Plateau } from "../../Domain/Plateau";

export class Handler {
  public static handleInput(input: string): void {
    const lines = input.trim().split("\n");
    const [plateauWidth, plateauHeight] = lines[0].split(" ").map(Number);
    const plateau = new Plateau(plateauWidth, plateauHeight);

    for (let i = 1; i < lines.length; i += 2) {
      const [x, y, orientation] = lines[i].split(" ");
      const rover = new Rover(
        Number(x),
        Number(y),
        orientation as "N" | "E" | "S" | "W"
      );
      const instructions = lines[i + 1];

      const command = new MoveRoverCommand(rover, plateau);
      try {
        const finalPosition = command.execute(instructions);
        console.log(
          `${finalPosition.x} ${finalPosition.y} ${finalPosition.orientation}`
        );
      } catch (error) {
        console.error(`Erro ao processar rover: ${(error as Error).message}`);
      }
    }
  }
}
