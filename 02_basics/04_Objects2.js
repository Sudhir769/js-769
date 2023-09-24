// const tinderUser = new Object()

const tinderUser = {
    id:"123abc",
    name: "Sammy",
    isLoggedIn:false
};

// console.log(tinderUser);

const regularUser = {
    email:"some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Sudhir",
            lastname: "Maurya"
        }
    }
}

console.log(regularUser);//{email: 'some@gmail.com',fullname: { userfullname: { firstname: 'Sudhir', lastname: 'Maurya' } } }
console.log(regularUser.fullname);//{ userfullname: { firstname: 'Sudhir', lastname: 'Maurya' } }
console.log(regularUser.fullname.userfullname); //{ firstname: 'Sudhir', lastname: 'Maurya' }
console.log(regularUser.fullname.userfullname.firstname);//Sudhir

const obj1 = {1: 'a', 2: 'b'};
const obj2 = {3: 'c', 4: 'd'};

// const obj3 = {obj1, obj2};
// console.log(obj3);//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj3 = {...obj1, ...obj2};
console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const user = [      //Array of Objects
    {
        id:1,
        email1:"s@gmail.com"
    },
    {
        id:2,
        email2:"su@gmail.com"
    }
]

console.log(user[0].id); //1
console.log(user[1].email2); //su@gmail.com

console.log(Object.keys(tinderUser)); //[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); //[ '123abc', 'Sammy', false ]
console.log(Object.entries(tinderUser)); //[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn'));//true



