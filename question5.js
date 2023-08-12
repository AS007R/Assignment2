"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
let age = prompt('Please enter your age: ');
if (!isNaN(age)) {
    if (age < 18) {
        console.log('You are not eligible for vote! As your age is less then 18 years.');
    }
    else {
        console.log('You are eligible for vote! As your age is above or equal to 18 years.');
    }
}
else {
    console.log('Please try again with currect answer');
}
