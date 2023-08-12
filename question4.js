"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
let num = prompt('Enter the number: ');
if (!isNaN(num)) {
    if (num % 2 === 0) {
        console.log(`${num} is even.`);
    }
    else {
        console.log(`${num} is odd.`);
    }
}
else {
    console.log("Invalid input. Please enter a valid number.");
}
