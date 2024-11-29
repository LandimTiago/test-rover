export interface ICommands {
  execute(instructions: string): { x: number; y: number; orientation: string };
}
