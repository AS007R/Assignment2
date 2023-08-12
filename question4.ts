import PromptSync from "prompt-sync";

const prompt = PromptSync();

let num: any = prompt('Enter the number: ');

if (!isNaN(num)) {
    if (num % 2 === 0) {
      console.log(`${num} is even.`);
    } else {
      console.log(`${num} is odd.`);
    }
  } else {
    console.log("Invalid input. Please enter a valid number.");
  }