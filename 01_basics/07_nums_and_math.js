const score = 100;
console.log(score); //100

const balance = new Number(400);
console.log(balance); //[Number: 400]

console.log(balance.toString()); //400
console.log(balance.toString().length); //3

console.log(balance.toFixed(2)); //sets precision value //400.00
console.log(balance.toPrecision(1)); //sets precision value //4e+2

const hundreds = 100000000;
console.log(hundreds.toLocaleString());// 100,000,000
console.log(hundreds.toLocaleString('en-IN'));// 10,00,00,000 prints in Indian standards

console.log(Number.MAX_VALUE); //1.7976931348623157e+308
console.log(Number.MIN_VALUE); //5e-324

console.log(Math.abs(-84)); //85
console.log(Math.round(4.6)); //5
console.log(Math.ceil(4.2)); //5
console.log(Math.floor(4.2)); //4
console.log(Math.sqrt(43)); //6.557438524302
console.log(Math.pow(4,3)); // 64
console.log(Math.max(45, 72, 19, 36)); //72
console.log(Math.min(45, 72, 19, 36)); //19
console.log(Math.random()); //0.8035065993025927 //random value
console.log((Math.random()*10)+1); // 7.756893812446647 //Usable format

const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min + 1)) + min); // gives value between max and min limits
