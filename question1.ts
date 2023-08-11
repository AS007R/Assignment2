import promptSync from 'prompt-sync';


const prompt = promptSync();
const  recWidth:any  = prompt('Enter the width of Rectangle: ');
const  recHight: any = prompt('Enter the hight of Rectangle: ');

const recArea = recHight * recWidth;
console.log(`Area of Rectangle is ${recArea}`);
