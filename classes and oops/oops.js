const user = {
    username: "hitesh",
    logInCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database");
        console.log(`username: ${this.username}`);
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`welcome ${this.username}`);
    }

    return this;
}

const UserOne = new User("Sudhir", 12, true); 
const UserTwo = new User("Maurya", 10, false);

console.log(UserOne.constructor);
console.log(UserTwo);