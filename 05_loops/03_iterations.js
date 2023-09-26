//for of loop
// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];
for(const num of arr){
    console.log(num);
}console.log();

// String object
let st = "Geeksforgeeks";
for (let value of st) {
	console.log(value);
}console.log();

// Iterating over argument objects
function Geeks() {
	for (let value of arguments) {
		console.log(value);
	}
}
// Iterating over all arguments passed
// through the function
Geeks("Geeks", "for", "Geeks");

console.log();
//Maps
// Map is an object that takes key-value pair as input
let mapObject = new Map([       
	["Geeks", 1],
	["For", 2],
	["geeks", 3],
]);

console.log("Display of Key-Value Pair->")
for (const entry of mapObject) {
	console.log(entry);
}
console.log();

console.log("Display of Value only->")
for (const [key, value] of mapObject) {
    console.log(value);
}
console.log();

const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}
// for(const [key, value] of myObject){
    // console.log(key, ":-", value); //this wont work as objects are non-iterable
// }