//singleton
//Object literals

let mySym = Symbol("key1");

let jsUser = {
    name: "Sudhir",
    "fullName": "Sudhir Maurya",
    age: 22,
    [mySym]: "myKey1",
    location: "jaipur",
    email: "sudhir@google.com",
    isLoggedIn:false,
    lastLogInDays: ["Monday", "Tuesday"]
}
console.log(jsUser.name);
console.log(jsUser["fullName"]);//Sudhir Maurya
console.log(jsUser[mySym]);//myKey1

jsUser.email = "sudhirmaurya769@gmail.com";
console.log(jsUser["email"]);//sudhirmaurya769@gmail.com

// Object.freeze(jsUser);//prevemts changes

jsUser.email = "sudhirmaurya771@gmail.com";
console.log(jsUser["email"]);//sudhirmaurya769@gmail.com
console.log();

// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello js user");
}
jsUser.greeting2 = function(){
    console.log(`Hello js user ${this.name}`);
}
jsUser.greeting();//Hello js user
jsUser.greeting2();//Hello js user Sudhir
