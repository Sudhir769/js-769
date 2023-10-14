function setUsername(username){
    //complex BD calls
    this.username = username;
    console.log("called");
}

function createUser(username, email, password){
    setUsername.call(this, username);
    this.email=email;
    this.password=password;
}

const chai = new createUser("Sudhir", "sudhir@gmail.com", 123)
console.log(chai);