"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const recWidth = prompt('Enter the width of Rectangle: ');
const recHight = prompt('Enter the hight of Rectangle: ');
const recArea = recHight * recWidth;
console.log(`Area of Rectangle is ${recArea}`);
