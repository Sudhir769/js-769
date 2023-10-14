let myName = "Sudhir       ";
let mySurname = "Maurya  "

// console.log(myName.length); //13

let myHeros = ["thor", "spiderman"];
let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.sudhir = function(){
    console.log(`Sudhir is present in all objects`);
}

Array.prototype.heySudhir = function(){
    console.log(`Sudhir says hello`);
}

// heroPower.sudhir();
// myHeros.sudhir();
// myHeros.heySudhir();
// heroPower.heySudhir();

//inheritance

const User = {
    name:"Sudhir",
    email:"sudhir@google.com"
}

const Teacher = {
    makeVideo:true
}

const TeachingSupport = {
    isAvailable:false
}

const TASupport = {
    makeAssignment: "JS assignment",
    fullTime:true,
    __proto__:TeachingSupport
}

Teacher.__proto__ = User;

// modern Syntax
Object.setPrototypeOf(TeachingSupport, Teacher);
let anotherUsername = "SudhirMaurya  ";

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);
}

anotherUsername.trueLength();
"Sudhir    ".trueLength();
"iceTea ".trueLength();