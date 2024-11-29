import { describe, expect, it } from "vitest";
import { MoveRoverCommand } from "../Application/useCases/moveRoverCommand";
import { Plateau } from "../Domain/models/Plateau";
import { Rover } from "../Domain/models/Rover";

describe("Mars Rover Tests", () => {
  const plateau = new Plateau(5, 5);

  it("should execute a series of instructions correctly", () => {
    const rover = new Rover(1, 2, "N");
    const command = new MoveRoverCommand(rover, plateau);

    const result = command.execute("LMLMLMLMM");
    expect(result).toEqual({ x: 1, y: 3, orientation: "N" });
  });

  it("should throw an error if the rover goes out of bounds", () => {
    const rover = new Rover(0, 0, "S");
    const command = new MoveRoverCommand(rover, plateau);

    expect(() => command.execute("M")).toThrowError(
      "Rover tentou sair do plateau em (0, -1)"
    );
  });
});
