let marvel_heros = ["Thor", "IronMan", "SpiderMan"];
let dc_heros = ["SuperMan", "Flash", "BatMan"];

// marvel_heros.push(dc_heros);
console.log(marvel_heros); //[ 'Thor', 'IronMan', 'SpiderMan', [ 'SuperMan', 'Flash', 'BatMan' ] ]
console.log();

let all_heros = marvel_heros.concat(dc_heros);
console.log(all_heros);//[ 'Thor', 'IronMan', 'SpiderMan', 'SuperMan', 'Flash', 'BatMan' ]

let all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros);//[ 'Thor', 'IronMan', 'SpiderMan', 'SuperMan', 'Flash', 'BatMan' ]

let arr = [1,2,3,[4,5,6,[7,8,9]]];
console.log(arr);//[ 1, 2, 3, [ 4, 5, 6, [ 7, 8, 9 ] ] ]

let new_arr = arr.flat(Infinity);
console.log(new_arr); //[1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(Array.isArray("Sudhir"));//false
console.log(Array.from("Sudhir"));//[ 'S', 'u', 'd', 'h', 'i', 'r' ]
console.log(Array.from({name:"Sudhir"}));//interesting

let num1 = 100;
let num2 = 200;
let num3 = 300;

console.log(Array.of(num1,num2,num3));//[ 100, 200, 300 ]
