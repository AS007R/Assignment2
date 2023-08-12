import PromptSync from "prompt-sync";

const prompt = PromptSync();

let cubeSide: any = prompt('Enter the side of cube: ');

let cubeArea = cubeSide ** 2;

console.log(`Area of a cube is: ${cubeArea}`);

