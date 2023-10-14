class User{
    constructor(username){
        this.username=username;
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username);
        this.email=email;
        this.password = password;
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const person = new Teacher("Sudhir", "sudhir@gmail.com", 123);
person.logMe(); //USERNAME is Sudhir

const person2 =new User("Maurya");
person2.logMe();

console.log(person instanceof User); //true
console.log(person instanceof Teacher); //true
console.log(person2 instanceof User); //true
console.log(person2 instanceof Teacher); //false