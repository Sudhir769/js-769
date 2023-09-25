const userEmail = "sudhir@gmail.com";
const userEmail2 = "";

if(userEmail){
    console.log("1. Got user Email");
}else{
    console.log("1. Don't have user Email");
}console.log();

if(userEmail2){
    console.log("2. Got user Email");
}else{
    console.log("2. Don't have user Email");
}console.log();

//falsy-values

// false, "0", "", [], {}, function(){}

if(userEmail2.length===0){
    console.log("Array is empty");
}else{
    console.log("Array is not empty");
}console.log();

if(userEmail.length===0){
    console.log("Array is empty");
}else{
    console.log("Array is not empty");
}

const object = {};

if(Object.keys(object).length === 0){
    console.log("object is empty");
}

console.log(false===0);//false
console.log(false==0);//true
console.log(false=='');//true
console.log(0 =='');//true
console.log();

//Nulllish Coalscing Operator (??): null undefined

let val1;
val1 = 5??10;
val2 = null??10;
val3 = undefined??15;
val4 = null??10??20;

console.log(val1);//5
console.log(val2);//10
console.log(val3);//15
console.log(val4);//10
console.log();

// Ternery Operator
// condition ? true:false;
(4>=5)? console.log("greater"):console.log("false");
