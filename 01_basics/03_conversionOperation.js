// let score = 33
let score = "33"
score = Number(score)

console.log(typeof(score));
console.log(typeof score);

let name = "123Sudhir"

console.log(typeof name);//string
name = Number(name)

console.log(typeof name); //number
console.log(name); //NaN

console.log("");

let num = null;
console.log(num); //null
num = Number(num);

console.log(1 + "3"); //13
console.log("3" + 1); //31
console.log(1 - "3"); //-2

let variable = undefined
console.log(variable) // undefined
console.log(typeof variable) //undefined

console.log("");
variable = Number(variable);
console.log(variable) // undefined
console.log(typeof variable) //undefined

let isOkay = true
console.log(isOkay);

isOkay = Number(isOkay)
console.log(isOkay);

// "33"=>33
// "33abc"=>NaN
// true=>1; false=0;

let count = 1;
count = Boolean(count);

console.log(count); //true
console.log(typeof count);//boolean