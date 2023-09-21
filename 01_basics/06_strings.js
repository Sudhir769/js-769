const name = "Sudhir";
const count = 40;


console.log(name + count + " value"); // Bad Practice
console.log(`Hello my name is ${name} and my count is ${count}`);

// 
const myName = new String('Sudhir')
// console.log(myName.__proto__);
console.log(myName.length); //6
console.log(myName.charAt(5)); //r
console.log(myName.toUpperCase()); //SUDHIR
console.log(name.charAt(4)); //i
console.log(myName.indexOf('r')); //5

let newName  = myName.substring(0,4);
console.log(newName); //Sudh

let newName2  = myName.slice(-5, 4);
console.log(newName2); //udh

let newString = "     Sudhir  ";
console.log(newString);//     Sudhir  
console.log(newString.trim()); //Sudhir

const url = "https://github.com/Sudhir769/js-769/tree/main/01_basics";
console.log(url.replace('tree', 'shoe'));
console.log(url.includes('Sudhir769')); //true


const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// Expected output: "fox"

const chars = str.split('');
console.log(chars[8]);
// Expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]

console.log(url.split('/'));
// ['https:', '', 'github.com', 'Sudhir769', 'js-769', 'tree', 'main', '01_basics']