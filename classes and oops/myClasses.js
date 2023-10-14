//After Es6

// class User{
//     constructor(username, email, password){
//         this.username=username;
//         this.email=email;
//         this.password=password;
//     }

//     encryptPassword(){
//         return `${this.password}abc`;
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }
// const chai = new User("chai", "chai@gmail.com", 123);
// console.log(chai);
// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

//behind the scene

function User(username, email, password){
    this.username=username;
    this.email=email;
    this.password=password;
}

User.prototype.encryptPassword = function(){
    return `${this.username}769`;
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`;
}

let user1 = new User("Sudhir", "sudhirmaurya@gmail.com", 123);

console.log(user1);
console.log(user1.encryptPassword());
console.log(user1.changeUsername());