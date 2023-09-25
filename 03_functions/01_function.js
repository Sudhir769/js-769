function myFunction(g1, g2) {
	return g1 / g2;
}
const value = myFunction(8, 2); // Calling the function
console.log(`value is ${value}`);//value is 4


function calcAddition(number1, number2) {
	return number1 + number2;
}
console.log(`sum is ${calcAddition(6,9)}`);//sum is 15


const square = function (number) {
	return number * number;
};
const x = square(4); // x gets the value 16
console.log(x);//16
console.log();

const a = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

const a2 = a.map(function (s) {
	return s.length;
});

console.log("Normal way ", a2); // [8, 6, 7, 9]

const a3 = a.map((s) => s.length);

console.log("Using Arrow Function ", a3); // [8, 6, 7, 9]


function multiply(a, b) {
	b = typeof b !== "undefined" ? b : 1;
	return a * b;
}
console.log(multiply(69)); // 69


function welcomeMsg(name) {
	return ("Hello " + name + " welcome to GeeksforGeeks");

}
let nameVal = "Sudhir"; //creating a variable
console.log(welcomeMsg(nameVal)); // calling the function



