//Scope of function

var c = 300;
let a = 300;

if(true){
    let a = 10;
    const b = 20;
    c=40;
    console.log("Inner c: ", c);//40
    console.log("Inner a: ", a);//10
}
console.log();
console.log("Outer c: ", c);//40
console.log("Outer a: ", a);//300

//Nested Scope

function one(){
    const username = "Sudhir";

    function two(){
        const website = "Maurya"
        console.log(username);
    }
    // console.log(website);//Error
    two();
}
one();//Sudhir

if(true){
    const username = "hitesh";
    if(true){
        const website = " youtube";
    }
    // console.log(website);//Error
}
// console.log(username);//Error


function addone(num){
    return num + 1;
}
console.log(addone(5));

const addtwo = function(num){
    return num + 2;
}
console.log(addtwo(5)); //fails if called before dclaration
