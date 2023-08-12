import PromptSync from "prompt-sync";

const prompt = PromptSync();

let age: any = prompt('Please enter your age: ');

if (!isNaN(age)){
    if (age < 18){
        console.log('You are not eligible for vote! As your age is less then 18 years.');
    }else {
        console.log('You are eligible for vote! As your age is above or equal to 18 years.');
    }
}else {
    console.log('Please try again with currect answer');

}