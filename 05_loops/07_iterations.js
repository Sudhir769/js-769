const myNums = [1,2,3,4,5,6,7,8,9,10];

const newNums = myNums.map( (num) => num+10);
const newNums2 = myNums
                    .map( (num) => num*10)
                    .map((num) => num+5)
                    .filter((num)=>num>40);

console.log(newNums);// [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
console.log(newNums2); // [ 45, 55, 65, 75, 85, 95, 105 ]


const array1 = [1, 2, 3, 4];
// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);

console.log(sumWithInitial); //Expected output: 10

const shoppingCart = [
    {
        item:'js',
        price:599
    },

    {
        item:'python',
        price:299
    },

    {
        item:'cpp',
        price:999
    }
]

const cost = shoppingCart.reduce((acc, item)=> acc + item.price, 0);
console.log(cost); //1897