function calculateCartPrice(val1, val2,... val){
    return val;
}
console.log(calculateCartPrice(5, 10, 25, 50, 75));//[ 25, 50, 75 ]

const user = {
    username:"hitesh",
    price: 199
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject(user);//username is hitesh and price is 199

handleObject({username:"Sudhir",price:100});//username is Sudhir and price is 100

const myArr = [100, 300, 500, 200];
function returnSecondValue(getArray){
    return getArray[1];
}
console.log(`returns second value ${returnSecondValue(myArr)}`); //returns second value 300
console.log(returnSecondValue(["Sudhir", "Maurya", "is", "God"]));//Maurya