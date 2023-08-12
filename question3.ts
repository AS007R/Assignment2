import PromptSync from "prompt-sync";

const prompt = PromptSync();

let num: any = prompt('Enter the number: ');

if (num < 0){
    console.log(`The number '${num}' is negitive!`);
}else if (num>0){
    console.log(`The number '${num}' is positive!`);
}else {
    console.log(`The number '${num}' is zero!`);
}
