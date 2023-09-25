// Array function

const user = {
    username: "Sudhir",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this); //talks about current context
    }
}
user.welcomeMessage()//Sudhir, welcome to website
user.username = "Sam"
user.welcomeMessage()//Sam, welcome to website
// console.log(this);

//1. function chai(){
//     let username2 = 'Sudhir'
//     console.log(this.username2);
// }
// chai();//undefined

//2. let chai = function(){
//     let username2 = 'Sudhir'
//     console.log(this.username2);
// }
// chai();//undefined

let chai = () => {
    let username2 = 'Sudhir'
    console.log(this.username2);
}
chai();//undefined

const addthree = (num1, num2, num3) => {
    return num1+num2+num3;
}
console.log(addthree(4, 8, 12));//24

const addtwo = (num1, num2)=> num1+num2; //Implict return
console.log(addtwo(3, 4));//

const addTwo = (num1, num2) =>({username:"Sudhir"})
console.log(addTwo(3,4));//{ username: 'Sudhir' }
const myArray = [2,5,7,4,9];
myArray.forEach((i)=>{console.log(i);})//2 5 7 4 9

