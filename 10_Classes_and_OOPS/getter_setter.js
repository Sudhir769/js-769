class User{
    constructor(email, password){
        this.email=email;
        this.password=password;
    }

    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        this._email=value;
    }

    get password(){
        return `${this._password}ABC`;
    }
    set password(value){
        this._password=value;
    }
}

const sudhir = new User("sudhir@gmail.com", 123);
console.log(sudhir.email);
console.log(sudhir.password);