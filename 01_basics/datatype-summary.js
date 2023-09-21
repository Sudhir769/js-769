// Primitive 
//7-types : String, Number, Boolean, null, undefined, Symbol

const score = 100
const scoreVal = 100.3
const isLoggedIn=true
let userEmail;
const outSideTemp=null
console.log(typeof outSideTemp);

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id===anotherId);

const bigNumber = 182945784959439485n 
console.log(typeof bigNumber); //BigInt
console.log("");

// Reference type
// Array, Objects, Functions

let heroes = ["Shaktiman", "Naagraj", "Doga"] //Array

let myObj = {          //Object
    name:"Sudhir",
    age:25,
}

let myFunction = function(){      //Functions
    console.log("Hello World");
}

console.log(typeof heroes); //object
console.log(typeof myObj); //object
console.log(typeof myFunction); //function