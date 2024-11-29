import * as fs from "fs";
import { Handler } from "./Infrastructure/Handlers";

const main = () => {
  try {
    const input = fs.readFileSync("./input.txt", "utf8");
    Handler.handleInput(input);
  } catch (error) {
    console.error(`Erro ao executar o programa: ${(error as Error).message}`);
  }
};

main();
