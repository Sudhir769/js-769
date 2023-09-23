let myArr = [1, 2, 3, 4, 5, "Sudhir", "Maurya"];
myArr.push("Student", true);
let myArr2 = new Array(5, 4, 3, 2, 1);

// console.log(myArr);

// Arrays methods

myArr.push(6);
myArr.push(6);
myArr.unshift(0);
myArr.push(7);
myArr.pop();
myArr.shift();

console.log(myArr); //
console.log(myArr.length); //11
console.log(myArr.includes(3)); //true
console.log(myArr.indexOf(7));//-1

let newArr = myArr2.join();
console.log(newArr); //5,4,3,2,1
console.log(typeof newArr); //string

