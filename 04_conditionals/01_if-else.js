// if-else

let j = 10;

if (j > 15) console.log("10 is less than 15");

// This statement will be executed
// as if considers one statement by default
console.log("I am Not in if");

// JavaScript program to illustrate If statement
let age = 19;

if (age > 18)
console.log("Congratulations, You are eligible to drive");
console.log();

// JavaScript program to illustrate If-else statement
let i = 10;

if (i < 15)
	console.log("i is less than 15");
else
	console.log("I am Not in if");

console.log();
// JavaScript program to illustrate nested-if statement
let k = 10;

if (k == 10) { // First if statement
	if (k < 15) {
		console.log("k is smaller than 15");
		// Nested - if statement
		// Will only be executed if statement above
		// it is true
		if (k < 12)
			console.log("k is smaller than 12 too");
		else
			console.log("k is greater than 15");
	}
}console.log();

// short hand notation
let sum=200;
if(sum>150) console.log("sum is greater"), console.log("increase yopur guess");//not a good practice
console.log();

let balance = 724;
if(balance<500){
    console.log("Balance is less than 500");
}else if(balance<750){
    console.log("balance is less than 750");
}else if(balance<1000){
    console.log("balance is less than 1000");
}else if(balance==1000){
    console.log("balance is equal to 1000");
}else{
    console.log("balance is greater than 1000");
}console.log();


// multiple conditions

const userLoggedIn = true;
const debitCard = true;

if(userLoggedIn && debitCard){
    console.log("1. payment allowed");
}else{
    console.log("1.payment rejected");
}console.log();

const loggedInFromGoogle = true;
const loggedInFromEmail = false;

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("2. payment allowed");
}else{
    console.log("2. payment rejected");
}console.log();